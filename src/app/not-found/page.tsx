"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
    
    // Report to analytics service (optional)
    interface WindowWithGtag extends Window {
      gtag?: (...args: unknown[]) => void;
    }
    const win = window as WindowWithGtag;
    if (typeof window !== 'undefined' && win.gtag) {
      win.gtag('event', '404_error', {
        page_path: pathname
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Auto-redirect after countdown
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push("/");
    }
  }, [countdown, router]);

  const handleGoBack = () => {
    router.back();
  };

  const suggestedPaths = getSuggestedPaths(pathname??'');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-gray-800 opacity-10 absolute inset-0 transform -translate-y-4">
            404
          </div>
          <div className="relative">
            <h1 className="text-8xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">
              4
              <span className="text-indigo-600 animate-pulse">0</span>
              4
            </h1>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The page <code className="bg-gray-200 px-2 py-1 rounded text-sm">&quot;{pathname}&quot;</code> doesn&apos;t seem to exist.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Redirecting to homepage in <span className="font-bold text-indigo-600">{countdown}</span> seconds...
          </p>
        </div>

        {/* Suggested Paths */}
        {suggestedPaths.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Were you looking for:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedPaths.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-indigo-300 hover:text-indigo-700 transition-colors duration-200"
                >
                  {path.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Can&apos;t find what you&apos;re looking for?</p>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Try our search page
          </Link>
        </div>

        {/* Contact Support */}
        <div className="mt-6 text-xs text-gray-500">
          <p>
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-indigo-600 hover:text-indigo-800 underline">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper function to suggest similar paths based on the current path
function getSuggestedPaths(currentPath: string): Array<{ href: string; label: string }> {
  const suggestions: Array<{ href: string; label: string }> = [];
  
  // Remove trailing slashes and split path
  const cleanPath = currentPath.replace(/\/+$/, "");
  const pathSegments = cleanPath.split("/").filter(segment => segment.length > 0);
  
  // Suggest parent directory
  if (pathSegments.length > 1) {
    const parentPath = "/" + pathSegments.slice(0, -1).join("/");
    suggestions.push({
      href: parentPath,
      label: `Parent Directory`
    });
  }
  
  // Common pages that might be relevant
  const commonPages = [
    { href: "/", label: "Homepage" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/help", label: "Help Center" },
  ];
  
  // Add common pages that partially match the current path
  commonPages.forEach(page => {
    if (currentPath.toLowerCase().includes(page.label.toLowerCase()) || 
        page.href.includes(pathSegments[0] || '')) {
      suggestions.push(page);
    }
  });
  
  // Limit to 3 suggestions
  return suggestions.slice(0, 3);
}