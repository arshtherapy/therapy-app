import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  const teamMembers = [
    { name: "Dr. Nehal Suthar", role: "Paediatric Physiotherapist" },
    { name: "Dr. Zalak Suthar", role: "Paediatric Physiotherapist" },
    { name: "Dr. Kritika", role: "Paediatric Physiotherapist" },
    { name: "Ms. Ruhee", role: "Rehabilitation Psychologist and Behaviour Specialist" },
    { name: "Dr. Manjur Masuri", role: "Paediatric Rehabilitation Specialist" },
    { name: "Dr. Sabiha Saiyed", role: "Paediatric Physiotherapist" },
    { name: "Dr. Naziya Shaikh", role: "Paediatric Physiotherapist" },
    { name: "Dr. Jasim Saiyed", role: "Paediatric Physiotherapist" },
    { name: "Dr. Alfez", role: "Paediatric Physiotherapist" },
    { name: "Ms. Ruksar", role: "Rehabilitation Psychologist and Speech Therapist" },
    { name: "Mrs. Nafisa", role: "Rehabilitation Psychologist, ABA & CBT Therapist" },
    { name: "Mr. Bharat", role: "Sensory & Oromotor Therapist" },
    { name: "Ms. Sumaiya", role: "Management and Coordinator" },
    { name: "Mrs. Bhagvati", role: "Management and Coordinator" }
  ];

  const stats = [
    { number: "1000+", label: "Happy Families", icon: Heart },
    { number: "14+", label: "Expert Therapists", icon: Users },
    { number: "13+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Success Rate", icon: Star }
  ];

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
  ];

  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Arsh Paediatric Therapy Centre",
    "description": "Comprehensive paediatric therapy services in Ahmedabad specializing in physiotherapy, speech therapy, occupational therapy, and rehabilitation for children with developmental needs.",
    "url": "https://www.arshpaediatrictherapy.com/about",
    "logo": "https://www.arshchildtherapy.com/favicon.ico",
    "sameAs": [
      "https://www.facebook.com/arshpaediatrictherapy",
      "https://www.instagram.com/arshpaediatrictherapy"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Juhapura Branch Address",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380000",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Navrangpura Branch Address",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380000",
        "addressCountry": "IN"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paediatric Therapy Services",
      "itemListElement": servicesData.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": `Professional ${service.title} services for children at Arsh Paediatric Therapy Centre`,
          "provider": {
            "@type": "MedicalOrganization",
            "name": "Arsh Paediatric Therapy Centre"
          }
        }
      }))
    },
    "medicalSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Pediatric Rehabilitation"
    }
  };

  // JSON-LD Schema for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Arsh Paediatric Therapy Centre",
    "image": "https://www.arshchildtherapy.com/favicon.ico",
    "@id": "https://www.arshpaediatrictherapy.com",
    "url": "https://www.arshpaediatrictherapy.com",
    "telephone": "+91 9876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Juhapura and Navrangpura",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380000",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "medicalSpecialty": "Pediatric Rehabilitation"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.arshpaediatrictherapy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.arshpaediatrictherapy.com/about"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>About Us - Arsh Paediatric Therapy Centre | Ahmedabad</title>
        <meta name="description" content="Learn about our expert team and comprehensive paediatric therapy services including physical therapy, ABA therapy, speech therapy and more in Ahmedabad." />
        <meta name="keywords" content="paediatric therapy, child rehabilitation, Ahmedabad, physical therapy, speech therapy, occupational therapy, ABA therapy, sensory integration, early intervention, Juhapura, Navrangpura" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Arsh Paediatric Therapy Centre | Ahmedabad" />
        <meta property="og:description" content="Meet our team of certified paediatric therapists and learn about our comprehensive therapy services for children in Ahmedabad." />
        <meta property="og:url" content="https://www.arshpaediatrictherapy.com/about" />
        <meta property="og:image" content="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg" />
        <meta property="og:site_name" content="Arsh Paediatric Therapy Centre" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Arsh Paediatric Therapy Centre | Ahmedabad" />
        <meta name="twitter:description" content="Comprehensive paediatric therapy services in Ahmedabad with expert therapists and proven results." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.arshpaediatrictherapy.com/about" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Business verification if available */}
        <meta name="google-site-verification" content="your_verification_code" />
      </Head>
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              About Arsh Paediatric Therapy Centre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to empowering children through comprehensive therapy services in Juhapura and Navrangpura, Ahmedabad.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-poppins font-bold text-gray-800">
                  Our Mission & Philosophy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Arsh Paediatric Therapy Centre, we believe every child deserves the opportunity to reach their full potential. 
                  Our mission is to provide comprehensive, evidence-based therapy services that support children&apos;s development 
                  and help them achieve independence in their daily lives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We take a family-centered approach, working closely with parents and caregivers to ensure that therapy 
                  goals align with each family&apos;s values and priorities. Our team is committed to creating a supportive, 
                  nurturing environment where children feel safe to explore, learn, and grow.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Individualized Care</h4>
                      <p className="text-gray-600">Personalized treatment plans tailored to each child&apos;s unique needs and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Evidence-Based Practice</h4>
                      <p className="text-gray-600">Utilizing the latest research and proven therapeutic techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Family-Centered Approach</h4>
                      <p className="text-gray-600">Involving families in every step of the therapeutic process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary-50 rounded-3xl p-8">
                  <Image 
                    src="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg"
                    alt="Child therapy session at Arsh Paediatric Therapy Centre in Ahmedabad"
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{stat.number}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Founder Section */}
          {/* Founder Section */}
<section className="mb-20">
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Meet Our Founders
    </h2>
    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      The visionary leaders behind Arsh Paediatric Therapy Centre, dedicated to transforming children's lives through exceptional care.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
    {/* Founder 1 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center text-primary-600 text-5xl font-bold mb-6 border-4 border-white shadow-md">
            NS
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dr. Nilofar Vora Shaikh
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">BPT</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">T/NDT</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Aquatic Therapist (ATNI)</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Certified RBT</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Certified OPT</span>
            </div>
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-primary-200 pl-4 py-2 bg-gray-50 rounded">
              "Our vision was to create a center where children receive comprehensive care under one roof, with a team that works collaboratively to address all aspects of their development."
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Founder 2 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center text-primary-600 text-5xl font-bold mb-6 border-4 border-white shadow-md">
            AS
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dr. Aadil Shaikh
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">BPT</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">MPT</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">T/NDT</span>
              <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Aquatic Therapist (ATNI)</span>
            </div>
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-primary-200 pl-4 py-2 bg-gray-50 rounded">
              "We wanted to build more than just a clinic - a community where families find support, resources, and hope for their children's brighter future."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-10 max-w-7xl mx-auto shadow-lg border border-gray-100">
    <div className="text-center mb-10">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Our Founding Journey
      </h3>
      <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        How two passionate professionals built a center of excellence in paediatric care
      </p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="space-y-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">The Beginning</h4>
              <p className="text-gray-600 leading-relaxed">
                In 2018, <strong>Dr. Nilofar Vora Shaikh</strong> and <strong>Dr. Aadil Shaikh</strong> founded Arsh with a mission to provide <em>accessible, high-quality therapy services</em> to children in Ahmedabad. Starting with just two therapists, they focused on personalized, holistic care.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pioneering Online Therapy</h4>
              <p className="text-gray-600 leading-relaxed">
                During COVID in 2019, we pioneered remote therapy sessions, now a resounding success. This innovation extended our reach to children in remote areas who previously lacked access to specialized care.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Growth & Impact</h4>
              <p className="text-gray-600 leading-relaxed">
                From a modest clinic to a multi-location center, we've transformed hundreds of lives while maintaining our commitment to personalized care and clinical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dr. Aadil Shaikh</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                With <strong>13+ years of experience</strong>, Dr. Aadil specializes in helping children achieve developmental milestones. His expertise in neurodevelopmental techniques and aquatic therapy has empowered countless children to walk, stand, and sit independently.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lifelong learner, he continuously enhances his skills through advanced training, ensuring Arsh remains at the forefront of paediatric rehabilitation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dr. Nilofar Vora Shaikh</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                A specialist in <strong>genetic neuromuscular conditions</strong> (SMA, DMD, LGMD), Dr. Nilofar is recognized for her expertise with complex cases. She has expanded her practice to include Sensory Integration, Behavior Therapy, and Oral Placement Therapy for children with Autism and ADHD.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Her compassionate approach and clinical excellence make her a trusted partner for families navigating developmental challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 bg-white p-8 rounded-xl border border-primary-200 shadow-sm">
      <div className="text-center max-w-4xl mx-auto">
        <h4 className="font-semibold text-gray-900 mb-4 text-xl">Our Community Commitment</h4>
        <p className="text-gray-600 leading-relaxed">
          Through our <strong className="text-primary-600">#FREEHAB</strong> initiative, we provide free assessments and therapy to underprivileged children, while connecting families with resources and fundraising support. We believe every child deserves quality care, regardless of financial circumstances.
        </p>
      </div>
    </div>

    <div className="mt-10 text-center max-w-4xl mx-auto">
      <blockquote className="text-gray-700 italic text-lg leading-relaxed border-l-4 border-primary-500 pl-6 py-2">
        "From a small clinic to a trusted name in paediatric rehabilitation, our journey reflects our unwavering commitment to transforming children's lives through innovative, compassionate care."
      </blockquote>
      <div className="mt-4 text-gray-500 font-medium">
        — Dr. Nilofar & Dr. Aadil Shaikh
      </div>
    </div>
  </div>
</section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of certified therapists brings years of experience and passion for helping children succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-2 border-gray-100 rounded-xl hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <h3 className="font-medium text-gray-800 text-lg">
                        {member.name}
                      </h3>
                      <p className="text-gray-500 mt-1">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 bg-accent-100 rounded-2xl p-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-gray-800">
                Personalized Treatment Plans
              </h2>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                We understand that every child is unique. That's why we create individualized treatment plans that address each child's specific needs and strengths.
              </p>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Our therapists use a variety of evidence-based methods, including play therapy, sensory integration, behavioral techniques, and family coaching to ensure holistic development and positive outcomes.
              </p>
              <Button asChild>
                <Link href="/contact" aria-label="Contact Arsh Paediatric Therapy Centre">
                  Get In Touch <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;