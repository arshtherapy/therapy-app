import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Calendar, Clock, Users, Award, Activity, BookOpen, GraduationCap, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Special Education Services | Paediatric Therapy Centre Ahmedabad",
  description: "Individualized special education programs for children with learning differences, developmental delays, and special needs.",
  keywords: ["special education Ahmedabad", "learning disability support", "IEP programs", "special needs education"],
};

const SpecialEducationPage = () => {
  // Structured data for Special Education service
  const specialEducationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Special Education Services",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Comprehensive special education services including individualized education plans (IEPs), academic support, and life skills training for children with special needs.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialEducationSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-orange-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Individualized Learning
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Special <span className="text-yellow-300">Education</span> Services
              </h1>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
                Customized educational programs designed to help children with special needs achieve their full academic and social potential.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Assessment
                  </Button>
                </Link>
                <a href="tel:+919998162680">
                  <Button 
                    variant="outline" 
                    className="bg-amber-600 border-white text-white hover:bg-amber-50 hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
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
        <nav className="bg-amber-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-amber-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-amber-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Special Education</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Personalized Special Education Programs
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our special education services provide individualized instruction tailored to each child's unique learning style, abilities, and challenges. We focus on building academic skills while addressing developmental needs.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Individualized Education Plans (IEPs)",
                    "Multisensory teaching approaches",
                    "Academic skill building",
                    "Social skills development",
                    "Behavioral support strategies",
                    "Parent training and collaboration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/special-ed/special-ed-1.jpeg"
                  alt="Special education teacher working with student"
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
                Benefits of Our Special Education Program
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our specialized approach helps children with diverse learning needs succeed academically and socially
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Academic Progress",
                  description: "Targeted instruction in reading, writing, and math",
                  icon: <BookOpen className="w-8 h-8 text-amber-600" />
                },
                {
                  title: "Confidence Building",
                  description: "Success-oriented approach boosts self-esteem",
                  icon: <Award className="w-8 h-8 text-amber-600" />
                },
                {
                  title: "Social Skills",
                  description: "Structured opportunities for social development",
                  icon: <Users className="w-8 h-8 text-amber-600" />
                },
                {
                  title: "Individualized Pace",
                  description: "Learning at the child's optimal speed and level",
                  icon: <Clock className="w-8 h-8 text-amber-600" />
                },
                {
                  title: "Life Skills",
                  description: "Practical skills for daily living and independence",
                  icon: <GraduationCap className="w-8 h-8 text-amber-600" />
                },
                {
                  title: "Parent Partnership",
                  description: "Regular communication and home strategies",
                  icon: <Activity className="w-8 h-8 text-amber-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
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
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/special-ed/special-ed-1.jpeg"
                      alt="One-on-one special education session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/special-ed/special-ed-2.jpeg"
                      alt="Child working on special education activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/special-ed/special-ed-2.jpeg"
                      alt="Group learning activity"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Special Education Methodology
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We combine evidence-based teaching strategies with individualized attention to meet each child's unique learning needs.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Assessment",
                      description: "Detailed evaluation of academic skills and learning profile"
                    },
                    {
                      title: "IEP Development",
                      description: "Customized Individualized Education Plan with measurable goals"
                    },
                    {
                      title: "Multisensory Instruction",
                      description: "Engaging visual, auditory, and tactile learning approaches"
                    },
                    {
                      title: "Positive Behavior Support",
                      description: "Strategies to encourage appropriate behaviors and reduce challenges"
                    },
                    {
                      title: "Progress Monitoring",
                      description: "Regular assessment and adjustment of teaching strategies"
                    },
                    {
                      title: "Collaboration",
                      description: "Working with parents, therapists, and other professionals"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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

        {/* Conditions We Support */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learning Needs We Address
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our special education services support children with various learning differences and developmental challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Autism Spectrum Disorder",
                "Learning Disabilities (Dyslexia, Dyscalculia)",
                "Attention Deficit Disorders (ADHD/ADD)",
                "Developmental Delays",
                "Speech and Language Disorders",
                "Intellectual Disabilities"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition}</h3>
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
                Common questions about our Special Education Services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is the student-to-teacher ratio in your program?",
                  answer: "We maintain a low 1:1 or small group (max 3:1) ratio to ensure each child receives individualized attention tailored to their specific needs."
                },
                {
                  question: "How do you create Individualized Education Plans (IEPs)?",
                  answer: "Our IEPs are developed through comprehensive assessment, parent input, and collaboration with other professionals. Each plan includes specific, measurable goals and is regularly reviewed and updated."
                },
                {
                  question: "Do you coordinate with my child's school?",
                  answer: "Yes, with parental consent we can collaborate with your child's school teachers to ensure consistency between our program and their classroom experience."
                },
                {
                  question: "What qualifications do your special education teachers have?",
                  answer: "Our teachers hold degrees in special education and related fields, with specialized training in evidence-based interventions for diverse learning needs."
                },
                {
                  question: "How long does a child typically need special education services?",
                  answer: "The duration varies based on each child's needs and progress. Some children benefit from short-term targeted intervention, while others may need longer-term support."
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
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover How Special Education Can Help Your Child
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Our team is ready to assess your child's needs and create a personalized learning plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
              
              <Link href="tel:+91-9998162680" passHref>
                <Button 
                  variant="secondary"
                  className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default SpecialEducationPage;