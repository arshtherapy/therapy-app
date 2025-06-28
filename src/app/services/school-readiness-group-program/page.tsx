import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Users, Award, BookOpen, School, Smile, Globe, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School Readiness Program | Paediatric Therapy Centre Ahmedabad",
  description: "Comprehensive group program to prepare children for academic success by developing cognitive, social, emotional and physical readiness skills.",
  keywords: ["School readiness program Ahmedabad", "Preschool preparation", "Kindergarten readiness", "Early childhood development"],
};

const SchoolReadinessPage = () => {
  // Structured data for School Readiness service
  const schoolReadinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "School Readiness Program",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Comprehensive group program to prepare children for academic success by developing cognitive, social, emotional and physical readiness skills.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolReadinessSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')] bg-[length:80px_40px] opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🎒 Preparing for Academic Success
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                School <span className="text-yellow-300">Readiness</span> Program
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Comprehensive group program to prepare children for academic success by developing cognitive, social, emotional and physical readiness skills.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <School className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Button>
                </Link>
                <a href="tel:+919999999999">
                  <Button 
                    variant="outline" 
                    className="text-white bg-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
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
        <nav className="bg-green-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-green-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-green-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">School Readiness Program</li>
            </ol>
          </div>
        </nav>

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Preparing Children for Academic Success
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our school readiness program helps children develop the foundational skills needed to transition successfully into formal schooling. Through engaging group activities, we target all areas of development to ensure your child is confident and prepared.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Develops pre-academic skills (letters, numbers, shapes)",
                    "Enhances social interaction with peers", 
                    "Improves attention span and classroom behavior",
                    "Builds fine motor skills for writing",
                    "Encourages independence and self-help skills",
                    "Reduces separation anxiety from parents"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/school-readiness/school-readiness-1.jpeg"
                  alt="Children participating in school readiness activities"
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
                Benefits of Our School Readiness Program
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach addresses all key areas of development needed for a successful transition to school
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Academic Preparation",
                  description: "Develops pre-reading, writing and math skills through play-based learning",
                  icon: <BookOpen className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Social Skills",
                  description: "Teaches sharing, turn-taking and cooperative play with peers",
                  icon: <Users className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Emotional Regulation",
                  description: "Helps manage emotions and build confidence in new situations",
                  icon: <Smile className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Cognitive Development",
                  description: "Improves attention, memory and problem-solving abilities",
                  icon: <Globe className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Routine Adaptation",
                  description: "Prepares children for classroom schedules and transitions",
                  icon: <Clock className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Physical Readiness",
                  description: "Develops fine motor skills for writing and gross motor for playground",
                  icon: <Award className="w-8 h-8 text-green-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
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
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/school-readiness/school-readiness-2.jpeg"
                      alt="Children doing fine motor activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/school-readiness/school-readiness-3.jpeg"
                      alt="Group circle time activity"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/school-readiness/school-readiness-4.jpeg"
                      alt="Children working on pre-writing skills"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our School Readiness Curriculum
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our evidence-based program follows a structured yet flexible curriculum that prepares children for the demands of formal schooling through engaging activities.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Initial Assessment",
                      description: "Comprehensive evaluation of current skills and areas needing support"
                    },
                    {
                      title: "Small Group Sessions",
                      description: "4-6 children per group with 2 trained facilitators"
                    },
                    {
                      title: "Structured Daily Routine",
                      description: "Circle time, table work, free play and snack time to mimic school"
                    },
                    {
                      title: "Multisensory Learning",
                      description: "Activities engage visual, auditory and tactile learning styles"
                    },
                    {
                      title: "Progress Reports",
                      description: "Regular updates on your child's development and readiness"
                    },
                    {
                      title: "Parent Training",
                      description: "Workshops to help reinforce skills at home"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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

        {/* Skills Developed */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Skills Developed
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our program targets all essential developmental domains to ensure comprehensive school preparation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Pre-Academic",
                  skills: ["Letter recognition", "Number concepts", "Shape identification", "Color knowledge"]
                },
                {
                  title: "Fine Motor",
                  skills: ["Pencil grasp", "Scissor skills", "Tracing/writing", "Manipulative play"]
                }, 
                {
                  title: "Social-Emotional",
                  skills: ["Following rules", "Taking turns", "Emotion regulation", "Conflict resolution"]
                },
                {
                  title: "Self-Help",
                  skills: ["Independent toileting", "Lunchbox skills", "Dressing", "Personal organization"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {category.title === "Pre-Academic" && <BookOpen className="w-8 h-8 text-green-600" />}
                    {category.title === "Fine Motor" && <Award className="w-8 h-8 text-green-600" />}
                    {category.title === "Social-Emotional" && <Users className="w-8 h-8 text-green-600" />}
                    {category.title === "Self-Help" && <CheckCircle className="w-8 h-8 text-green-600" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Program Details
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Structured to provide optimal learning experiences for preschool-aged children
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Age Group",
                  description: "3-6 years (preschool to kindergarten)",
                  icon: <Users className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Group Size",
                  description: "4-6 children per group with 2 facilitators",
                  icon: <School className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Session Duration",
                  description: "90 minutes, 3-5 times per week",
                  icon: <Clock className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Program Length",
                  description: "8-12 week sessions (recommended 2 sessions)",
                  icon: <Calendar className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Therapist Ratio",
                  description: "1 therapist per 3 children for individualized attention",
                  icon: <Award className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Parent Involvement",
                  description: "Weekly updates and monthly workshops",
                  icon: <Smile className="w-8 h-8 text-green-600" />
                }
              ].map((detail, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {detail.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{detail.title}</h3>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about our School Readiness Program
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How is this different from regular preschool?",
                  answer: "Our program is specifically designed for children who need extra support transitioning to school. We have higher staff ratios, individualized goals, and therapists trained to address developmental challenges."
                },
                {
                  question: "My child has special needs. Is this program appropriate?",
                  answer: "Yes, our therapists are trained to work with children with various developmental differences. We individualize our approach based on each child's needs while maintaining the group learning environment."
                },
                {
                  question: "What qualifications do your facilitators have?",
                  answer: "All group leaders are certified occupational therapists, special educators, or early childhood specialists with additional training in school readiness approaches."
                },
                {
                  question: "Can parents observe the sessions?",
                  answer: "We have scheduled observation days and also provide video updates. Initially we may recommend limited observation to help children adjust to separation."
                },
                {
                  question: "How soon before school should we enroll?",
                  answer: "We recommend starting 6-12 months before school entry, with at least one full session (8-12 weeks) completed before school begins."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prepare Your Child for School Success
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Give your child the confidence and skills they need to thrive in their educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <School className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </Link>
              <Link href="tel:+91-9998162680" passHref>
                <Button 
                  variant="outline" 
                  className="bg-green-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default SchoolReadinessPage;