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
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Our Founders
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The visionaries behind Arsh Paediatric Therapy Centre who are committed to transforming children&apos;s lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Founder 1 */}
              <Card className="border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-4xl font-bold">
                      NS
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
                        Nilofar Shaikh
                      </h3>
                      <p className="text-gray-600 mb-4">With over 12+ years of experience in paediatric care</p>
                      <p className="text-gray-600 leading-relaxed">
                        &quot;Our vision was to create a center where children receive comprehensive care under one roof, with a team that works collaboratively to address all aspects of their development.&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Founder 2 */}
              <Card className="border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-4xl font-bold">
                      AS
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
                        Aadil Shaikh
                      </h3>
                      <p className="text-gray-600 mb-4">With over 13+ years of experience in paediatric care</p>
                      <p className="text-gray-600 leading-relaxed">
                        &quot;We wanted to build more than just a clinic - a community where families find support, resources, and hope for their children&apos;s brighter future.&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
                  Our Founding Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2018 by Nilofar Shaikh and Aadil Shaikh, Arsh Paediatric Rehabilitaion & Speech Therapy Centre began with a simple mission: to provide high-quality, accessible therapy services to children in Ahmedabad.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small clinic with two therapists has now grown into a leading center with multiple locations, serving hundreds of families each year while maintaining the personal touch and commitment to excellence that defined our beginnings.
                </p>
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
                We understand that every child is unique. That&apos;s why we create individualized treatment plans that address each child&apos;s specific needs and strengths.
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