import { Button } from '@/components/ui/button';
import {  CheckCircle, Phone, Calendar, Users, Award, Activity, Heart, Smile, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Play Therapy & Floortime Approach | Paediatric Therapy Centre Ahmedabad",
  description: "Child-led play therapy and DIR/Floortime approach to support emotional, social and cognitive development in children with special needs.",
  keywords: ["play therapy Ahmedabad", "Floortime therapy", "child development therapy", "DIR Floortime"],
};

const PlayTherapyPage = () => {
  // Structured data for Play Therapy service
  const playTherapySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Play Therapy & Floortime Approach",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Child-centered play therapy and DIR/Floortime approach to support emotional regulation, social skills and cognitive development through play-based interactions.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(playTherapySchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Developmental Intervention
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Play Therapy & <span className="text-yellow-300">Floortime</span> Approach
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Child-led therapeutic play to build emotional connections, communication skills and cognitive development.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Session
                  </Button>
                </Link>
                <a href="tel:+919998162680">
                  <Button 
                    variant="outline" 
                    className="bg-blue-600 border-white text-white hover:bg-blue-50 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
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
              <li className="text-gray-600">Play Therapy & Floortime</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Child-Centered Play Therapy & DIR/Floortime
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our play-based therapy follows the child&#39;s natural interests and emotions to build essential developmental capacities through joyful, meaningful interactions.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Follows the child's natural interests and motivations",
                    "Builds emotional connections and regulation",
                    "Develops communication and social skills",
                    "Enhances problem-solving and cognitive abilities",
                    "Supports sensory integration",
                    "Parent involvement and coaching"
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
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/floor-time/floor-2.jpeg"
                  alt="Child engaging in play therapy"
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
                Benefits of Play Therapy & Floortime
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our play-based approach helps children develop crucial emotional, social and cognitive skills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Emotional Regulation",
                  description: "Helps children understand and manage their emotions",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Social Engagement",
                  description: "Develops shared attention and interaction skills",
                  icon: <Users className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Communication",
                  description: "Encourages both verbal and non-verbal expression",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Cognitive Skills",
                  description: "Builds problem-solving and creative thinking",
                  icon: <Award className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Sensory Processing",
                  description: "Supports healthy sensory integration through play",
                  icon: <Play className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Confidence",
                  description: "Boosts self-esteem through mastery and connection",
                  icon: <Smile className="w-8 h-8 text-blue-600" />
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
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/floor-time/floor-1.jpeg"
                      alt="Therapist engaging in play with child"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/floor-time/floor-2.jpeg"
                      alt="Child doing play therapy activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/floor-time/floor-3.jpeg"
                      alt="Parent and child playing together"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The DIR/Floortime Model
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use the Developmental, Individual-differences, Relationship-based (DIR) model with Floortime techniques to support children&#39;s development through play.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Follow the Child's Lead",
                      description: "We join the child in their world of play to build connection"
                    },
                    {
                      title: "Challenge & Expand",
                      description: "Gently challenge the child to expand their play and interactions"
                    },
                    {
                      title: "Developmental Milestones",
                      description: "Focus on building foundational social-emotional capacities"
                    },
                    {
                      title: "Individual Differences",
                      description: "Tailored to each child's unique sensory and processing profile"
                    },
                    {
                      title: "Relationship-Based",
                      description: "Uses warm, joyful interactions to promote development"
                    },
                    {
                      title: "Parent Coaching",
                      description: "Teaches parents to use Floortime principles at home"
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
                Who Benefits from Play Therapy?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our play therapy and Floortime approach helps children with various developmental challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Autism Spectrum Disorder",
                "Social Communication Challenges",
                "Sensory Processing Differences",
                "ADHD & Focus Issues",
                "Anxiety or Emotional Regulation Difficulties",
                "Developmental Delays"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
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
                Common questions about Play Therapy and the Floortime approach
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What age is play therapy appropriate for?",
                  answer: "Play therapy can benefit children from toddlerhood through elementary school years. We adapt our approach based on the child's developmental level rather than chronological age."
                },
                {
                  question: "How is Floortime different from traditional play therapy?",
                  answer: "Floortime is a specific approach within play therapy that focuses on following the child's lead to build emotional connections and developmental capacities, rather than just teaching skills."
                },
                {
                  question: "How often are sessions needed?",
                  answer: "Most children benefit from 1-2 sessions per week, with daily Floortime play at home. We'll recommend a frequency based on your child's needs."
                },
                {
                  question: "Do parents participate in sessions?",
                  answer: "Yes! We actively involve parents in sessions and provide coaching so you can use these techniques at home, which is crucial for progress."
                },
                {
                  question: "How long until we see results?",
                  answer: "Many parents notice small improvements in engagement and interaction within weeks, but meaningful developmental progress typically takes several months of consistent therapy."
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Child&#39;s Play Therapy Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our compassionate therapists are ready to help your child connect, communicate and thrive through play.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Session
                </Button>
              </Link>
              
              <Link href="tel:+91-9998162680" passHref>
                <Button 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default PlayTherapyPage;