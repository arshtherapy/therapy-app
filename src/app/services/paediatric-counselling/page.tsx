import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Calendar, Clock, Users, Heart, Activity, Smile, Shield, Brain } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Child Counseling Services | Paediatric Therapy Centre Ahmedabad",
  description: "Professional counseling for children and adolescents addressing emotional, behavioral, and social challenges in a supportive environment.",
  keywords: ["child counseling Ahmedabad", "pediatric psychologist", "child therapist", "children's mental health"],
};

const PaediatricCounsellingPage = () => {
  // Structured data for Pediatric Counseling service
  const counselingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pediatric Counseling Services",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Professional counseling services for children and adolescents dealing with emotional, behavioral, and social challenges.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(counselingSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-600 to-rose-700 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern-dots.svg')] bg-[length:40px_40px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Emotional Wellbeing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Child & <span className="text-yellow-300">Adolescent Counseling</span>
              </h1>
              <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
                Compassionate mental health support to help children and teens navigate emotional challenges and build resilience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Session
                  </Button>
                </Link>
                <a href="tel:+919998162680">
                  <Button 
                    variant="outline" 
                    className="bg-pink-600 border-white text-white hover:bg-pink-50 hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
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
        <nav className="bg-pink-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-pink-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/services" className="text-pink-600 hover:underline">Services</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600">Child Counseling</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Child-Centered Counseling Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our pediatric counseling services provide a safe, nurturing space for children and adolescents to express themselves, process emotions, and develop healthy coping strategies through evidence-based therapeutic approaches.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Play therapy for younger children",
                    "Cognitive Behavioral Therapy (CBT)",
                    "Emotional regulation strategies",
                    "Social skills development",
                    "Family counseling and parent guidance",
                    "Trauma-informed care"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/counseling/counseling-1.jpeg"
                  alt="Child counselor working with young client"
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
                Benefits of Child Counseling
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Professional counseling can help children and teens navigate challenges and develop essential emotional skills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Emotional Expression",
                  description: "Provides healthy outlets for feelings and experiences",
                  icon: <Heart className="w-8 h-8 text-pink-600" />
                },
                {
                  title: "Behavior Improvement",
                  description: "Reduces problematic behaviors through understanding triggers",
                  icon: <Activity className="w-8 h-8 text-pink-600" />
                },
                {
                  title: "Anxiety Reduction",
                  description: "Teaches coping skills for worries and fears",
                  icon: <Shield className="w-8 h-8 text-pink-600" />
                },
                {
                  title: "Social Skills",
                  description: "Improves peer interactions and friendships",
                  icon: <Users className="w-8 h-8 text-pink-600" />
                },
                {
                  title: "Self-Esteem",
                  description: "Builds confidence and positive self-image",
                  icon: <Smile className="w-8 h-8 text-pink-600" />
                },
                {
                  title: "Family Harmony",
                  description: "Improves communication and relationships at home",
                  icon: <Brain className="w-8 h-8 text-pink-600" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
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
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/counseling/counseling-1.jpeg"
                      alt="Play therapy session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/counseling/counseling-2.jpeg"
                      alt="Teen counseling session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/counseling/counseling-2.jpeg"
                      alt="Family counseling session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Therapeutic Methods
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use developmentally appropriate, evidence-based approaches tailored to each child's age, needs, and personality.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Play Therapy",
                      description: "Using play as communication for younger children to express emotions"
                    },
                    {
                      title: "Cognitive Behavioral Therapy",
                      description: "Helping children identify and change unhelpful thought patterns"
                    },
                    {
                      title: "Sand Tray Therapy",
                      description: "Non-verbal therapeutic approach using miniature figures in sand"
                    },
                    {
                      title: "Art Therapy",
                      description: "Creative expression to process emotions and experiences"
                    },
                    {
                      title: "Mindfulness Techniques",
                      description: "Teaching awareness and emotional regulation skills"
                    },
                    {
                      title: "Parent Coaching",
                      description: "Guidance for parents to support their child's emotional health"
                    }
                  ].map((method, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-pink-100 text-pink-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concerns We Address */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Concerns We Help With
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our pediatric counselors support children and teens facing various emotional and behavioral challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Anxiety & Excessive Worry",
                "Depression & Mood Changes",
                "Behavioral Challenges",
                "School Refusal & Academic Stress",
                "Social Difficulties & Bullying",
                "Grief & Loss",
                "Trauma & PTSD",
                "ADHD & Focus Issues",
                "Family Transitions (Divorce, Blended Families)"
              ].map((concern, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{concern}</h3>
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
                Common questions about our Pediatric Counseling Services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "At what age can children start counseling?",
                  answer: "We work with children as young as 3 years old using play therapy techniques. The approach varies based on developmental level rather than strict age guidelines."
                },
                {
                  question: "How long does each counseling session last?",
                  answer: "Sessions typically last 45-50 minutes for individual child therapy. Family sessions may run 60-75 minutes depending on needs."
                },
                {
                  question: "Will I be involved in my child's therapy?",
                  answer: "Parent involvement varies based on age and issues, but we always include regular parent check-ins and often incorporate family sessions as appropriate."
                },
                {
                  question: "How many sessions will my child need?",
                  answer: "This depends on the concerns being addressed. Some children show improvement in 8-12 sessions, while others with more complex needs may benefit from longer-term support."
                },
                {
                  question: "What qualifications do your child counselors have?",
                  answer: "Our counselors hold advanced degrees in psychology, counseling, or social work, with specialized training in child development and evidence-based pediatric therapies."
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
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Your Child Thrive Emotionally
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Our compassionate counselors are ready to support your child's mental health and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Appointment
                </Button>
              </Link>
              
              <Link href="tel:+91-9998162680" passHref>
                <Button 
                  variant="secondary"
                  className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105"
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

export default PaediatricCounsellingPage;