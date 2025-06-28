import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar, Users, Award, Activity, Brain, Move, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Primitive Reflex Integration Therapy | Paediatric Therapy Centre Ahmedabad",
  description: "Specialized therapy to integrate retained primitive reflexes that may be affecting your child's development, learning, and behavior.",
  keywords: ["primitive reflex therapy Ahmedabad", "retained reflexes", "child development therapy", "reflex integration"],
};

const PrimitiveReflexTherapyPage = () => {
  // Structured data for Primitive Reflex Therapy service
  const primitiveReflexSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Primitive Reflex Integration Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Assessment and integration of retained primitive reflexes that may be impacting a child's motor skills, learning, and behavior.",
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "23.0009",
          "longitude": "72.5169"
        },
        "geoRadius": "3000"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "23.0417",
          "longitude": "72.5520"
        },
        "geoRadius": "3000"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(primitiveReflexSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Neurodevelopmental Therapy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Primitive Reflex <span className="text-yellow-300">Integration Therapy</span>
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Addressing retained primitive reflexes that may be impacting your child&#39;s development, learning, and behavior.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Assessment
                  </Button>
                </Link>
                <a href="tel:+919998162680">
                  <Button 
                    variant="outline" 
                    className="bg-indigo-600 border-white text-white hover:bg-indigo-50 hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91-9998162680
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-indigo-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-indigo-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-indigo-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Primitive Reflex Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Understanding Retained Primitive Reflexes
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Primitive reflexes are automatic movements present at birth that should integrate as a child develops. When retained beyond typical timelines, they can interfere with motor skills, learning, and behavior.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Comprehensive reflex assessment",
                    "Targeted integration exercises",
                    "Improved motor coordination",
                    "Enhanced focus and learning readiness",
                    "Better emotional regulation",
                    "Parent/caregiver training"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/primitive-reflex/primitive-1.jpeg"
                  alt="Therapist assessing child's reflexes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of Reflex Integration
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Integrating retained primitive reflexes can lead to improvements in multiple areas of development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Motor Skills",
                  description: "Improves coordination, balance, and posture",
                  icon: <Move className="w-8 h-8 text-indigo-600" />
                },
                {
                  title: "Academic Performance",
                  description: "Enhances focus, reading, and writing abilities",
                  icon: <Award className="w-8 h-8 text-indigo-600" />
                },
                {
                  title: "Behavior Regulation",
                  description: "Reduces hyperactivity and emotional outbursts",
                  icon: <Activity className="w-8 h-8 text-indigo-600" />
                },
                {
                  title: "Sensory Processing",
                  description: "Helps with sensory sensitivities and tolerance",
                  icon: <Target className="w-8 h-8 text-indigo-600" />
                },
                {
                  title: "Speech & Language",
                  description: "Supports oral motor skills and articulation",
                  icon: <Users className="w-8 h-8 text-indigo-600" />
                },
                {
                  title: "Confidence",
                  description: "Boosts self-esteem through physical competence",
                  icon: <Brain className="w-8 h-8 text-indigo-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
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

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/primitive-reflex/primitive-1.jpeg"
                      alt="Therapist working on reflex integration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/primitive-reflex/primitive-2.jpeg"
                      alt="Child doing reflex integration exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/primitive-reflex/primitive-3.jpeg"
                      alt="Parent learning reflex exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Reflex Integration Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use evidence-based techniques to assess and integrate retained primitive reflexes through targeted movements and exercises.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation of retained primitive reflexes"
                    },
                    {
                      title: "Individualized Plan",
                      description: "Customized integration program based on assessment"
                    },
                    {
                      title: "Movement-Based Therapy",
                      description: "Specific exercises to stimulate integration"
                    },
                    {
                      title: "Sensory Integration",
                      description: "Incorporates sensory input to support reflex maturation"
                    },
                    {
                      title: "Home Program",
                      description: "Simple exercises for daily practice at home"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular reassessment to track integration"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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

        {/* Reflexes We Address */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Retained Reflexes We Treat
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We assess and help integrate these and other primitive reflexes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Moro (Startle) Reflex",
                "Asymmetrical Tonic Neck Reflex (ATNR)",
                "Symmetrical Tonic Neck Reflex (STNR)",
                "Tonic Labyrinthine Reflex (TLR)",
                "Spinal Galant Reflex",
                "Palmar Grasp Reflex"
              ].map((reflex, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{reflex}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about Primitive Reflex Integration Therapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What are the signs of retained primitive reflexes?",
                  answer: "Common signs include poor coordination, difficulty sitting still, messy handwriting, motion sickness, poor posture, reading challenges, and emotional reactivity. Each reflex has specific associated challenges."
                },
                {
                  question: "At what age should primitive reflexes be integrated?",
                  answer: "Most primitive reflexes should integrate by 12 months of age, though some may persist slightly longer. We can assess and treat retained reflexes at any age, from toddlers through adults."
                },
                {
                  question: "How long does reflex integration therapy take?",
                  answer: "Most children need 3-6 months of consistent therapy with daily home exercises. The duration depends on the number of retained reflexes and how strongly they're present."
                },
                {
                  question: "Can retained reflexes affect learning?",
                  answer: "Yes, retained reflexes can impact focus, eye tracking (important for reading), hand-eye coordination (for writing), and the ability to sit still - all crucial for academic success."
                },
                {
                  question: "Is this therapy appropriate for adults?",
                  answer: "Absolutely. While integration is easiest in childhood, we successfully work with adolescents and adults to address retained reflexes that may be affecting their daily life."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Child&#39;s Reflex Integration Journey
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Our trained therapists can assess your child&#39;s primitive reflexes and create a personalized integration plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Assessment
                </Button>
              </Link>
              
              <Link href="tel:+91-9998162680" passHref>
                <Button 
                  variant="secondary"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrimitiveReflexTherapyPage;