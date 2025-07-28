"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../app/arsh-logo.png"
const servicesData = [
  { id: "physical-therapy", title: "Physical Therapy" },
  { id: "aba-therapy", title: "Behaviour Therapy (ABA)" },
  { id: "opt-therapy", title: "Oral Placement Therapy (OPT)" },
  { id: "early-intervention", title: "Early Intervention" },
  { id: "online-therapy", title: "Online Therapy" },
  { id: "occupational-therapy", title: "Occupational Therapy" },
  { id: "sensory-integration", title: "Sensory Integration" },
  { id: "oromotor-speech", title: "Oro-motor & Speech Therapy" },
  { id: "aquatic-therapy", title: "Aquatic Therapy" },
  { id: "visual-rehabilitation", title: "Visual Rehabilitation" },
  { id: "orthosis-equipments", title: "Orthosis & Equipments" },
  { id: "chest-physiotherapy", title: "Chest Physiotherapy" },
  { id: "cognitive-behavioral-therapy", title: "Cognitive Behaviour Therapy (CBT)" },
  { id: "verbal-behavior-training", title: "Verbal Behaviour Training (VBT)" },
  { id: "brain-gym", title: "Brain Gym" },
  { id: "play-therapy-floor-time", title: "Play Therapy and Floor Time" },
  { id: "primitive-reflex-therapy", title: "Primitive Reflex Therapy" },
  { id: "paediatric-counselling", title: "Paediatric Counselling" },
  { id: "school-readiness-group-program", title: "School Readiness and Group Program" }
];

const Navbar = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/gallery", label: "Gallery" },
    { path: "/faq", label: "FAQ" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) =>
    pathname !== null && (pathname === path || pathname.startsWith(path + "/"));

  const handleServiceLinkClick = (href: string) => {
    setServicesDropdownOpen(false);
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  return (
    <nav className="backdrop-blur-xl bg-white/90 border-b border-gray-100 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          
<Link href="/" className="flex items-center space-x-3 group">
  {/* Mobile Logo - Shows only on mobile */}
  <div className="md:hidden bg-white hover:bg-white/90 rounded-full p-3 transition-all duration-300">
    <Image
      src={logo}
      alt="Arsh Child Therapy Logo"
      width={40}  // Increased from 32
      height={40} // Increased from 32
      className="h-10 w-auto" // Increased from h-8
    />
  </div>
  
  {/* Desktop Logo - Shows only on desktop */}
  <div className="hidden md:flex items-center">
    <div className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 dark:bg-primary dark:hover:bg-primary/80 group">
      <span className="text-white font-bold text-lg">Arsh</span>
    </div>
    <h1 className="hidden sm:block text-xl font-semibold text-gray-800 tracking-wide font-poppins group-hover:text-primary transition-colors duration-300 ml-3">
      Child Therapy
    </h1>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    ref={buttonRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setTimeout(() => {
                      if (!dropdownRef.current?.matches(":hover")) {
                        setServicesDropdownOpen(false);
                      }
                    }, 150)}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-primary bg-primary-light"
                          : "text-gray-600 hover:text-primary hover:bg-primary-light/50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>
                    
                    {/* Services Dropdown with scroll */}
                    {servicesDropdownOpen && (
                      <div
                        ref={!isMobile ? dropdownRef : null}
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setTimeout(() => {
                          if (!buttonRef.current?.matches(":hover")) {
                            setServicesDropdownOpen(false);
                          }
                        }, 150)}
                        className="absolute left-0 mt-1 w-56 rounded-xl shadow-lg bg-white border border-gray-100 py-2 z-50 animate-fade-in max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 pr-1"
                      >
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-light hover:text-primary transition-colors duration-200"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              {service.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-primary bg-primary-light"
                        : "text-gray-600 hover:text-primary hover:bg-primary-light/50"
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Call Button */}
            <a href="tel:+91-9998162680" className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary-light/50 transition-all duration-300">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 dark:bg-primary dark:hover:bg-primary/80 group">
                <Phone className="bg-primary w-4 h-4 mr-2 group-hover:animate-pulse" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Button 
              size="sm" 
              className="mr-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full px-4 shadow-md"
            >
              <Phone className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none transition-all duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6 animate-rotate-in" />
              ) : (
                <Menu className="w-6 h-6 animate-rotate-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-6 bg-white/95 backdrop-blur-lg border-t border-gray-100 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-colors text-left ${
                        isActive(item.path)
                          ? "text-primary bg-primary-light"
                          : "text-gray-700 hover:text-primary hover:bg-primary-light"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="pl-6 py-1 space-y-1 max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 pr-1">
                        <button
                          onClick={() => handleServiceLinkClick("/services")}
                          className={`block w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
                            pathname === "/services"
                              ? "text-primary bg-primary-light"
                              : "text-gray-700 hover:text-primary hover:bg-primary-light"
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="mr-2 text-primary">•</span>
                            All Services
                          </div>
                        </button>
                        {servicesData.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceLinkClick(`/services/${service.id}`)}
                            className={`block w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
                              pathname === `/services/${service.id}`
                                ? "text-primary bg-primary-light"
                                : "text-gray-700 hover:text-primary hover:bg-primary-light"
                            }`}
                          >
                            <div className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              {service.title}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-primary-light"
                        : "text-gray-700 hover:text-primary hover:bg-primary-light"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Button 
              className="w-full mt-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker text-white rounded-full px-6 py-3 shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;