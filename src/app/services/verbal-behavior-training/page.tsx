import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Users, Activity, Target, Zap, MessageSquare, Mic, Ear, Languages, Calendar, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Verbal Behavior Training for Children | ABA Speech Therapy Ahmedabad",
  description: "Evidence-based verbal behavior intervention using ABA principles to develop communication skills in children with autism, speech delays & language disorders. VB-MAPP assessment available.",
  keywords: [
    "verbal behavior training Ahmedabad",
    "ABA speech therapy",
    "autism communication therapy",
    "VB-MAPP assessment",
    "speech delay treatment",
    "verbal behavior intervention",
    "ABA therapy for autism",
    "communication skills development",
    "pediatric speech therapy",
    "nonverbal children therapy"
  ],
  authors: [{ name: "Paediatric Therapy Centre Ahmedabad" }],
  creator: "Paediatric Therapy Centre Ahmedabad",
  publisher: "Paediatric Therapy Centre Ahmedabad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/services/verbal-behavior-training',
  },
  openGraph: {
    title: "Verbal Behavior Training | ABA Speech Therapy for Children",
    description: "Evidence-based verbal behavior intervention using ABA principles to develop communication skills in children with autism and speech delays.",
    url: 'https://yourdomain.com/services/verbal-behavior-training',
    siteName: 'Paediatric Therapy Centre Ahmedabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Verbal Behavior Training Session at Paediatric Therapy Centre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Verbal Behavior Training | ABA Speech Therapy",
    description: "Evidence-based verbal behavior intervention for children with communication challenges.",
    images: ['https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Generate structured data for better SEO
function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Verbal Behavior Training",
    "description": "Evidence-based verbal behavior intervention using ABA principles to develop communication skills in children with speech and language delays or autism spectrum disorder.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "Paediatric Therapy Centre Ahmedabad",
      "description": "Specialized pediatric therapy center offering evidence-based interventions for children with developmental challenges.",
      "medicalSpecialty": "PediatricTherapy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "telephone": "+91-9998162680",
      "areaServed": ["Ahmedabad", "Gujarat", "India"],
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Verbal Behavior Training"
        },
        {
          "@type": "MedicalTherapy",
          "name": "ABA Therapy"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Speech Therapy"
        }
      ]
    },
    "serviceType": "Pediatric Therapy",
    "category": "MedicalService",
    "offers": {
      "@type": "Offer",
      "description": "Verbal Behavior Training Sessions"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "geoRadius": "50000"
    }
  };

  return structuredData;
}

const VerbalBehaviorTrainingPage = () => {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen">
        {/* Enhanced Hero Section with Schema Markup */}
        <section 
          className="relative bg-gradient-to-r from-blue-600 to-cyan-700 py-20 md:py-28 overflow-hidden"
          itemScope
          itemType="https://schema.org/MedicalService"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')] bg-[length:80px_40px] opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🗣️ Communication Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" itemProp="name">
                Verbal <span className="text-yellow-300">Behavior Training</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed" itemProp="description">
                ABA-based intervention to develop functional communication skills in children with speech and language delays or autism spectrum disorder.
              </p>
              
              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>VB-MAPP Certified Therapists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Evidence-Based Methods</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Individualized Programs</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Assessment
                  </Button>
                </Link>
                <a href="tel:+919998162680">
                  <Button 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91-9998162680
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Breadcrumb with Schema */}
        <nav className="bg-blue-50 py-4" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-blue-600 hover:underline" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-500">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/services" className="text-blue-600 hover:underline" itemProp="item">
                  <span itemProp="name">Services</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Verbal Behavior Training</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Service Overview with Enhanced Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Functional Communication Skills with ABA
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our <strong>Verbal Behavior Training program</strong> uses Applied Behavior Analysis (ABA) principles to teach children how to use language functionally across different settings and with various communication partners. We specialize in helping children with autism spectrum disorder, speech delays, and other communication challenges.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Based on B.F. Skinner's analysis of verbal behavior",
                    "Focuses on functional communication for daily life",
                    "Teaches language as a learned behavior through reinforcement",
                    "Uses positive reinforcement strategies tailored to each child",
                    "Individualized programs based on VB-MAPP assessment",
                    "Parent training and home programming included"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 p-6 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Show Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2-4</div>
                    <div className="text-sm text-gray-600">Weeks to First Words</div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-1.jpeg"
                  alt="Therapist conducting verbal behavior training session with child at Ahmedabad therapy centre"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section with Schema */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of Verbal Behavior Training
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our ABA-based approach helps children develop practical communication skills for daily life in Ahmedabad and surrounding areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Functional Communication",
                  description: "Teaches language that serves practical purposes in daily activities",
                  icon: <MessageSquare className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Verbal Operants Development",
                  description: "Systematically develops different language functions (mands, tacts, intraverbals)",
                  icon: <Mic className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Behavior Reduction",
                  description: "Replaces challenging behaviors with appropriate communication alternatives",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Skill Generalization",
                  description: "Ensures skills transfer across people, settings and materials effectively",
                  icon: <Users className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Listener Responding Skills",
                  description: "Improves understanding and following directions in various contexts",
                  icon: <Ear className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Social Communication",
                  description: "Enhances conversational skills, turn-taking, and social interaction abilities",
                  icon: <Languages className="w-8 h-8 text-blue-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-16">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-2.jpeg"
                      alt="Therapist using picture cards during VBT session in Ahmedabad"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-1.jpeg"
                      alt="Child practicing communication during snack time at therapy centre"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-2.jpeg"
                      alt="Parent training session for verbal behavior techniques in Ahmedabad"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our 6-Step Verbal Behavior Training Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We implement evidence-based ABA techniques to build functional communication skills through structured yet naturalistic teaching methods at our Ahmedabad centre.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "VB-MAPP or ABLLS-R assessment to identify current communication level and target skills"
                    },
                    {
                      title: "Mand Training (Requesting)",
                      description: "Teaching requesting as the first and most functional verbal operant"
                    },
                    {
                      title: "Tact Training (Labeling)",
                      description: "Developing labeling and naming skills for objects, actions, and properties"
                    },
                    {
                      title: "Listener Responding",
                      description: "Building receptive language skills and following directions"
                    },
                    {
                      title: "Intraverbal Training",
                      description: "Developing conversational skills and responding to others' speech"
                    },
                    {
                      title: "Generalization & Maintenance",
                      description: "Ensuring skills transfer to natural environments and are maintained over time"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions We Treat with Schema */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who Benefits from VBT in Ahmedabad?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Verbal Behavior Training helps children with various communication challenges in our Ahmedabad therapy centre
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Autism Spectrum Disorder (ASD)",
                "Speech & Language Delays", 
                "Childhood Apraxia of Speech",
                "Down Syndrome",
                "Global Developmental Delay",
                "Nonverbal Children",
                "Minimally Verbal Children",
                "Expressive Language Disorder",
                "All Types of Cerebral Palsy",
                "Hearing Impairments",
                "Intellectual Disabilities",
                "Social Communication Disorder"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group hover:border-blue-200">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <MessageSquare className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Verbal Behavior Techniques We Use
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Evidence-based methods we use to develop communication skills at our Ahmedabad centre
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Mand Training",
                  description: "Teaching functional requests for wants and needs using motivation",
                  icon: <Mic className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Discrete Trial Training",
                  description: "Structured teaching of specific skills in controlled settings",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Natural Environment Teaching",
                  description: "Incidental teaching in daily contexts and natural situations",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Errorless Learning",
                  description: "Minimizing errors during skill acquisition for success",
                  icon: <CheckCircle className="w-8 h-8 text-blue-600" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:bg-white hover:shadow-md transition-all border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About VBT
              </h2>
              <p className="text-gray-600">
                Common questions about Verbal Behavior Training in Ahmedabad
              </p>
            </div>
            
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  question: "How is VBT different from traditional speech therapy?",
                  answer: "VBT focuses specifically on the function of language using ABA principles, teaching children why we communicate (to request, label, etc.), while traditional speech therapy often focuses more on articulation, phonology, and language structure. VBT emphasizes functional communication that serves immediate purposes in the child's environment."
                },
                {
                  question: "What age is best to start VBT?",
                  answer: "Early intervention is ideal - we work with children as young as 18 months. The earlier communication skills are taught, the better the outcomes. However, VBT can benefit children of all ages, including teenagers, as it's never too late to develop communication skills."
                },
                {
                  question: "How long does it take to see results with VBT?",
                  answer: "Many children show progress within weeks, especially with manding (requesting) skills, as we use their current motivations. However, comprehensive language development is an ongoing process that typically requires consistent therapy over several months to years, depending on the child's needs and starting level."
                },
                {
                  question: "Do you use PECS (Picture Exchange System) in VBT?",
                  answer: "Yes, we incorporate PECS and other augmentative and alternative communication (AAC) systems when appropriate. These serve as bridges to vocal communication or as primary communication systems for children who have difficulty with vocal speech. We follow a total communication approach."
                },
                {
                  question: "Can VBT help completely nonverbal children?",
                  answer: "Absolutely. VBT is particularly effective for nonverbal children. We start with whatever communication modality works best for the child (gestures, pictures, devices, signs) and often see progression to vocal speech. The focus is on functional communication regardless of the modality."
                },
                {
                  question: "What qualifications do your VBT therapists have?",
                  answer: "Our therapists are certified in ABA and have specialized training in verbal behavior approaches. Many are BCBAs (Board Certified Behavior Analysts) or are pursuing certification. All therapists receive ongoing training and supervision to ensure evidence-based practice."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Enhanced Schema */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Your Child&#39;s Communication Potential?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free assessment at our Ahmedabad centre and discover how our Verbal Behavior Training program can help your child develop meaningful communication skills.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" fill="currentColor" />
                <span>VB-MAPP Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" fill="currentColor" />
                <span>ABA-Based Methods</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" fill="currentColor" />
                <span>Individualized Programs</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105 group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+91-9998162680">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-9998162680
                </Button>
              </a>
            </div>
            
            <p className="mt-4 text-blue-200 text-sm">
              Serving Ahmedabad and surrounding areas • Free initial consultation
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default VerbalBehaviorTrainingPage;