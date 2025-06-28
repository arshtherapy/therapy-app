import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Users, Award, Activity, Target, Heart, Zap, Brain, BookOpen, Eye, Hand } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brain Gym for Children | Paediatric Therapy Centre Ahmedabad",
  description: "Movement-based exercises to enhance learning, focus, and cognitive development through the Brain Gym® program.",
  keywords: ["Brain Gym Ahmedabad", "Educational kinesiology", "Learning readiness exercises", "Brain Gym for kids"],
};

const BrainGymPage = () => {
  // Structured data for Brain Gym service
  const brainGymSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Brain Gym",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Movement-based exercises to enhance learning, focus, and cognitive development through the Brain Gym® program.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brainGymSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-cyan-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')] bg-[length:80px_40px] opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                🧠 Movement for Learning
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-yellow-300">Brain Gym</span> Program
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Simple, fun movements that enhance brain function, improve learning readiness, and support overall cognitive development in children.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Brain className="w-5 h-5 mr-2" />
                    Book Session
                  </Button>
                </Link>
                <a href="tel:+919999999999">
                  <Button 
                    variant="outline" 
                    className="text-white bg-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
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
        <nav className="bg-blue-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Brain Gym</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Activate Your Child's Learning Potential
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Brain Gym program uses simple, specific movements to integrate the brain and body, improving focus, memory, comprehension, and physical coordination. These exercises help children overcome learning challenges and perform at their best.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Based on Educational Kinesiology",
                    "26 simple, effective movements",
                    "Improves brain-body communication",
                    "Enhances learning readiness",
                    "Reduces stress and anxiety",
                    "Supports overall development"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/brain-gym/brain-1.jpeg"
                  alt="Children doing Brain Gym exercises"
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
                Benefits of Brain Gym
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Simple movements with profound effects on learning and development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Improved Focus",
                  description: "Enhances concentration and attention span",
                  icon: <Eye className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Better Coordination",
                  description: "Integrates left and right brain functions",
                  icon: <Hand className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Enhanced Memory",
                  description: "Strengthens recall and information retention",
                  icon: <Brain className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Reduced Stress",
                  description: "Calms the nervous system for better learning",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Academic Performance",
                  description: "Supports reading, writing and math skills",
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Confidence Building",
                  description: "Increases self-esteem through success",
                  icon: <Award className="w-8 h-8 text-blue-600" />
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

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/brain-gym/brain-2.jpeg"
                      alt="Child doing cross-crawl exercise"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/brain-gym/brain-1.jpeg"
                      alt="Group doing Brain Gym activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/brain-gym/brain-2.jpeg"
                      alt="Therapist guiding Brain Gym movements"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Brain Gym Methodology
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We implement the 26 Brain Gym® movements in a structured yet playful way, customized to each child's developmental needs and learning goals.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Assessment",
                      description: "Identifying learning challenges and goals"
                    },
                    {
                      title: "Movement Selection",
                      description: "Choosing appropriate Brain Gym exercises"
                    },
                    {
                      title: "PACE Routine",
                      description: "Drinking water, Brain Buttons, Cross Crawls, Hook-ups"
                    },
                    {
                      title: "Targeted Exercises",
                      description: "Specific movements for reading, writing, etc."
                    },
                    {
                      title: "Integration",
                      description: "Applying improvements to academic tasks"
                    },
                    {
                      title: "Home Program",
                      description: "Teaching parents simple exercises for daily use"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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

        {/* Conditions We Help */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who Benefits from Brain Gym?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Brain Gym helps children with various learning and developmental challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Learning Disabilities",
                "ADHD/Attention Issues", 
                "Dyslexia",
                "Sensory Processing Disorder",
                "Developmental Delays",
                "Poor Handwriting",
                "Coordination Difficulties",
                "Test Anxiety",
                "Reading Challenges",
                "Memory Problems",
                "Low Motivation",
                "Stress Management"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exercises Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sample Brain Gym Exercises
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Some of the key movements we use in our program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cross Crawl",
                  description: "Coordinates left and right brain hemispheres",
                  icon: <Hand className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Brain Buttons",
                  description: "Stimulates blood flow to brain for focus",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Hook-ups",
                  description: "Calms the mind and improves organization",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Lazy 8s",
                  description: "Enhances eye tracking for reading",
                  icon: <Eye className="w-8 h-8 text-blue-600" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about Brain Gym
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How often should my child do Brain Gym exercises?",
                  answer: "For best results, we recommend daily practice - ideally 5-10 minutes in the morning before school. Many children benefit from short movement breaks throughout the day."
                },
                {
                  question: "At what age can children start Brain Gym?",
                  answer: "Brain Gym can be adapted for children as young as 3 years old. We modify the exercises based on developmental level and physical ability."
                },
                {
                  question: "How quickly will we see results?",
                  answer: "Many children show immediate improvements in focus after sessions. Lasting changes in learning abilities typically develop over 4-8 weeks of consistent practice."
                },
                {
                  question: "Is Brain Gym scientifically proven?",
                  answer: "While more research is needed, numerous studies show benefits of specific movements for learning. Our clinical experience demonstrates clear improvements in attention, coordination and academic performance."
                },
                {
                  question: "Can parents learn these exercises?",
                  answer: "Absolutely! We train parents in simple exercises to use at home. Many families incorporate Brain Gym into their daily routines."
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock Your Child's Learning Potential
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our Brain Gym program provides simple, effective tools to enhance focus, coordination and academic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Brain className="w-5 h-5 mr-2" />
                  Schedule Session
                </Button>
              </Link>
              <Link href="tel:+91-9998162680" passHref>
                <Button 
                  variant="outline" 
                  className="bg-blue-600 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default BrainGymPage;