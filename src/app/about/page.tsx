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
    { name: "Dr kritika Tiwari", role: "Paediatric Physiotherapist" },
    { name: "Ms Ruhee Hawa", role: "Rehabilitation Psychologist and Behaviour Therapist" },
    { name: "Dr. Manjur Mansuri", role: "Paediatric Rehabilitation Therapist" },
    { name: "Dr. Sabiha Saiyed", role: "Paediatric Physiotherapist" },
    { name: "Dr. Naziya Khan", role: "Paediatric Physiotherapist" },
    { name: "Dr. Jasim Shaikh", role: "Paediatric Physiotherapist" },
    { name: "Dr. Alfej Kankroliya", role: "Paediatric Physiotherapist" },
    { name: "Ms. Rukhsarbanu Pathan", role: "Rehabilitation Psychologist and Speech Therapist" },
    { name: "Mrs. Nafisa", role: "Rehabilitation Psychologist, ABA & CBT Therapist" },
    { name: "Mr. Bharat Makwana", role: "Rehabilitation psychologist and oromotor specialist" },
    {name: "Mr. Saniya Kachrajiwala", role:"Rehab psychologist"},
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
    "name": "Arsh Child Rehabilitation Center",
    "description": "Comprehensive paediatric therapy services in Ahmedabad specializing in physiotherapy, speech therapy, occupational therapy, and rehabilitation for children with developmental needs.",
    "url": "https://www.arshchildtherapy.com/about",
    "logo": "https://www.arshchildtherapy.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/arshchildtherapy",
      "https://www.instagram.com/arshchildtherapy"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "A block Himalaya falaknuma, 101 A, behind ROYAL AKBAR TOWER, Quresh Nagar Society",
        "addressLocality": "Juhapura, Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380055",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "704, addor ambition, Navrang Cir, Vithalbhai Patel Colony, Nathalal Colony",
        "addressLocality": "Navrangpura, Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380009",
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
          "description": `Professional ${service.title} services for children at Arsh Child Rehabilitation Center in Ahmedabad`,
          "provider": {
            "@type": "MedicalOrganization",
            "name": "Arsh Child Rehabilitation Center"
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
    "name": "Arsh Child Rehabilitation Center",
    "image": "https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg",
    "@id": "https://www.arshchildtherapy.com",
    "url": "https://www.arshchildtherapy.com",
    "telephone": "+91-9998162680",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Juhapura and Navrangpura",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380055",
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
      "opens": "10:00",
      "closes": "18:00"
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
        "item": "https://www.arshchildtherapy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.arshchildtherapy.com/about"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>About Arsh Child Rehabilitation Center | Pediatric Therapy in Ahmedabad</title>
        <meta name="description" content="Meet our expert team at Arsh Child Rehabilitation Center in Ahmedabad. 13+ years experience in pediatric therapy, speech therapy, ABA therapy & more. Free consultation available." />
        <meta name="keywords" content="pediatric therapy, child rehabilitation, Ahmedabad, physical therapy, speech therapy, occupational therapy, ABA therapy, sensory integration, early intervention, Juhapura, Navrangpura, autism therapy, child development, special needs children, physiotherapy, behaviour therapy, aquatic therapy, Dr. Nilofar Vora Shaikh, Dr. Aadil Shaikh" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Arsh Child Rehabilitation Center | Pediatric Therapy in Ahmedabad" />
        <meta property="og:description" content="Meet our team of certified pediatric therapists and learn about our comprehensive therapy services for children in Ahmedabad. 13+ years experience." />
        <meta property="og:url" content="https://www.arshchildtherapy.com/about" />
        <meta property="og:image" content="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg" />
        <meta property="og:site_name" content="Arsh Child Rehabilitation Center" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Arsh Child Rehabilitation Center | Pediatric Therapy in Ahmedabad" />
        <meta name="twitter:description" content="Comprehensive pediatric therapy services in Ahmedabad with expert therapists and proven results. 13+ years experience." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg" />
        <meta name="twitter:site" content="@arshchildtherapy" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.arshchildtherapy.com/about" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Arsh Child Rehabilitation Center" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-400">About Us</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              About Arsh Child Rehabilitation Center in Ahmedabad
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to empowering children through comprehensive therapy services in Juhapura and Navrangpura, Ahmedabad. 
              With over 13 years of experience, our team of 14+ expert therapists has helped 1000+ families.
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
                  At Arsh Child Rehabilitation Center in Ahmedabad, we believe every child deserves the opportunity to reach their full potential. 
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
                    alt="Child therapy session at Arsh Child Rehabilitation Center in Ahmedabad"
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
          <section className="mb-20">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founders
              </h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                The visionary leaders behind Arsh Child Rehabilitation Center in Ahmedabad, dedicated to transforming children&#39;s lives through exceptional care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
              {/* Founder 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex flex-col items-center">
                    <Image 
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/nilofar-profile.jpeg"
                      alt="Dr. Nilofar Vora Shaikh - Pediatric Therapy Specialist in Ahmedabad"
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full object-cover"
                    />
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
                        &quot;Our vision was to create a center where children receive comprehensive care under one roof — 
                        a team that works collaboratively to address every aspect of their development.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex flex-col items-center">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/adil-profile.jpeg"
                      alt="Dr. Aadil Shaikh - Pediatric Physiotherapist in Ahmedabad"
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full object-cover"
                    />
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
                        &quot;We wanted to build more than just a clinic - a community where families find support, resources, and hope for their children&#39;s brighter future.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-10 max-w-7xl mx-auto shadow-lg border border-gray-100">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Our Founding Journey in Ahmedabad
                </h3>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  How two passionate professionals built a center of excellence in pediatric care in Ahmedabad
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start mb-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">The Beginning</h4>
                        <p className="text-gray-600 leading-relaxed">
                          In 2018, <strong>Dr. Nilofar Vora Shaikh</strong> and <strong>Dr. Aadil Shaikh</strong> founded Arsh with a mission to provide <em>accessible, high-quality therapy services</em> to children in Ahmedabad. Starting with just two therapists, they focused on personalized, holistic care.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start mb-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Pioneering Online Therapy</h4>
                        <p className="text-gray-600 leading-relaxed">
                          During COVID in 2019, we pioneered remote therapy sessions, now a resounding success. This innovation extended our reach to children in remote areas who previously lacked access to specialized care.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start mb-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Growth & Impact</h4>
                        <p className="text-gray-600 leading-relaxed">
                          From a modest clinic to a multi-location center in Ahmedabad, we&#39;ve transformed hundreds of lives while maintaining our commitment to personalized care and clinical excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start mb-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Dr. Aadil Shaikh</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          With <strong>13+ years of experience</strong>, Dr. Aadil specializes in helping children achieve developmental milestones. His expertise in neurodevelopmental techniques and aquatic therapy has empowered countless children to walk, stand, and sit independently.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          A lifelong learner, he continuously enhances his skills through advanced training, ensuring Arsh remains at the forefront of paediatric rehabilitation in Ahmedabad.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start mb-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Dr. Nilofar Vora Shaikh</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          A specialist in <strong>genetic neuromuscular conditions</strong> (SMA, DMD, LGMD), Dr. Nilofar is recognized for her expertise with complex cases. She has expanded her practice to include Sensory Integration, Behavior Therapy, and Oral Placement Therapy for children with Autism and ADHD.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          Her compassionate approach and clinical excellence make her a trusted partner for families navigating developmental challenges.
                          Her impact extends beyond the clinic—she serves as a clinical therapist for DMD drug trials in India and is deeply involved in the SMA community, conducting awareness webinars and co-founding the SMA Clinic of Gujarat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white p-8 rounded-xl border border-primary-200 shadow-sm">
                <div className="text-center max-w-4xl mx-auto">
                  <h4 className="font-semibold text-gray-900 mb-4 text-xl">Our Community Commitment in Ahmedabad</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Through our <strong className="text-primary-600">#FREEHAB</strong> initiative, we provide free assessments and therapy to underprivileged children in Ahmedabad, while connecting families with resources and fundraising support. We believe every child deserves quality care, regardless of financial circumstances.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center max-w-4xl mx-auto">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed border-l-4 border-primary-500 pl-6 py-2">
                  &quot;From a small clinic to a trusted name in paediatric rehabilitation in Ahmedabad, our journey reflects our unwavering commitment to transforming childrens lives through innovative, compassionate care.&quot;
                </blockquote>
                <div className="mt-4 text-gray-500 font-medium">
                  — Dr. Nilofar & Dr. Aadil Shaikh, Founders of Arsh Child Rehabilitation Center
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Meet Our Expert Team in Ahmedabad
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of 14+ certified therapists brings years of experience and passion for helping children succeed. 
                Each specialist is committed to providing the highest quality pediatric therapy services in Ahmedabad.
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

          {/* Services Overview Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Our Pediatric Therapy Services in Ahmedabad
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive therapy services designed to address a wide range of developmental needs for children in Ahmedabad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                  <h3 className="font-semibold text-gray-800">{service.title}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild className="bg-primary-600 hover:bg-primary-700">
                <Link href="/services" aria-label="View all therapy services at Arsh Child Rehabilitation Center">
                  View All Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 bg-accent-100 rounded-2xl p-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-gray-800">
                Personalized Treatment Plans in Ahmedabad
              </h2>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                We understand that every child is unique. That&#39;s why we create individualized treatment plans that address each child&#39;s specific needs and strengths.
              </p>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Our therapists use a variety of evidence-based methods, including play therapy, sensory integration, behavioral techniques, and family coaching to ensure holistic development and positive outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary-600 hover:bg-primary-700 px-8 py-3">
                  <Link href="/contact" aria-label="Contact Arsh Child Rehabilitation Center in Ahmedabad">
                    Get In Touch <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-8 py-3">
                  <a href="tel:+919998162680" aria-label="Call Arsh Child Rehabilitation Center">
                    Call: +91-9998162680
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};


export default About;