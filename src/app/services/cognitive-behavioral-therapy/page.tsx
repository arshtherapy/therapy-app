import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Users, Award, Activity, Target, Heart, Zap, Brain, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cognitive Behaviour Therapy (CBT) for Children | Paediatric Therapy Centre Ahmedabad",
  description: "Evidence-based CBT techniques to help children manage emotions, overcome challenges, and develop positive thinking patterns.",
  keywords: ["CBT for kids Ahmedabad", "Child cognitive therapy", "Pediatric behavioral therapy", "Anxiety treatment for children"],
};

const CognitiveBehavioralTherapyPage = () => {
  // Structured data for CBT service
  const cbtSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cognitive Behavioral Therapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Evidence-based CBT techniques to help children manage emotions, overcome challenges, and develop positive thinking patterns.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cbtSchema) }}
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
                🧠 Evidence-Based Therapy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cognitive <span className="text-yellow-300">Behaviour Therapy</span> (CBT)
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Helping children identify and change unhelpful thought patterns and behaviors to improve emotional wellbeing and daily functioning.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Brain className="w-5 h-5 mr-2" />
                    Book Assessment
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
              <li className="text-gray-600">Cognitive Behaviour Therapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Transforming Thoughts, Changing Behaviors
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our child-friendly CBT program helps children understand the connection between their thoughts, feelings, and behaviors. Through engaging activities and evidence-based techniques, we empower children to develop healthier thinking patterns and coping strategies.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Identifies negative thought patterns",
                    "Teaches practical coping skills",
                    "Improves emotional regulation",
                    "Reduces anxiety and depression symptoms",
                    "Enhances problem-solving abilities",
                    "Builds confidence and resilience"
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
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/cbt-therapy/cbt-1.jpeg"
                  alt="Therapist conducting CBT session with child"
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
                Benefits of CBT for Children
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Cognitive Behavioural Therapy provides children with practical tools to manage challenges and improve mental wellbeing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Anxiety Reduction",
                  description: "Teaches techniques to manage worries and fears",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Mood Improvement",
                  description: "Helps identify and change negative thought patterns",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Behavior Modification",
                  description: "Develops healthier responses to challenging situations",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Social Skills",
                  description: "Improves communication and interpersonal relationships",
                  icon: <Users className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Academic Performance",
                  description: "Reduces test anxiety and improves focus",
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Self-Esteem",
                  description: "Builds confidence through skill mastery",
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
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/cbt-therapy/cbt-2.jpeg"
                      alt="Child doing thought-challenging exercise"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/cbt-therapy/cbt-3.jpeg"
                      alt="Therapist using CBT worksheets with child"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/cbt-therapy/cbt-1.jpeg"
                      alt="Family participating in CBT session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our CBT Process for Children
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We adapt traditional CBT techniques to be developmentally appropriate for children through play, art, and engaging activities.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Initial Assessment",
                      description: "Comprehensive evaluation of emotional and behavioral challenges"
                    },
                    {
                      title: "Goal Setting",
                      description: "Collaborative creation of specific, achievable therapy goals"
                    },
                    {
                      title: "Thought Identification",
                      description: "Helping children recognize automatic thoughts and beliefs"
                    },
                    {
                      title: "Cognitive Restructuring",
                      description: "Teaching children to challenge and reframe unhelpful thoughts"
                    },
                    {
                      title: "Behavioral Experiments",
                      description: "Testing new behaviors in safe, structured ways"
                    },
                    {
                      title: "Skill Building",
                      description: "Developing coping strategies and problem-solving skills"
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

        {/* Conditions We Treat */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conditions We Address
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                CBT is effective for children experiencing various emotional and behavioral challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Anxiety Disorders",
                "Depression", 
                "OCD (Obsessive-Compulsive Disorder)",
                "ADHD (Attention-Deficit/Hyperactivity Disorder)",
                "Behavioral Challenges",
                "School Refusal",
                "Social Anxiety",
                "Phobias",
                "Trauma and PTSD",
                "Low Self-Esteem",
                "Anger Management",
                "Sleep Problems"
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

        {/* Techniques Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Child-Friendly CBT Techniques
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We use engaging, age-appropriate methods to teach CBT concepts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Thought Challenging",
                  description: "Identifying and testing negative automatic thoughts",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Behavioral Activation",
                  description: "Increasing positive activities to improve mood",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Relaxation Training",
                  description: "Breathing exercises and mindfulness techniques",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Social Skills Training",
                  description: "Role-playing and social scenario practice",
                  icon: <Users className="w-8 h-8 text-blue-600" />
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
                Common questions about Cognitive Behaviour Therapy for children
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What age is appropriate for CBT?",
                  answer: "We adapt CBT techniques for children as young as 5-6 years old, using play-based and concrete methods. The approach becomes more sophisticated with older children."
                },
                {
                  question: "How long does CBT treatment typically last?",
                  answer: "Most children show improvement within 12-20 weekly sessions, though this varies based on individual needs and goals."
                },
                {
                  question: "Do parents participate in CBT sessions?",
                  answer: "We typically include parents in portions of sessions to teach them how to support their child's progress at home."
                },
                {
                  question: "Is CBT effective for children with autism?",
                  answer: "Yes, when adapted appropriately, CBT can help children with ASD manage anxiety, emotional regulation, and social challenges."
                },
                {
                  question: "How is CBT different from regular counseling?",
                  answer: "CBT is more structured and goal-oriented, focusing on identifying and changing specific thought and behavior patterns rather than just talking about problems."
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
              Help Your Child Build Mental Resilience
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our child-friendly CBT program provides practical tools for emotional wellbeing and positive development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Brain className="w-5 h-5 mr-2" />
                  Schedule Assessment
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

export default CognitiveBehavioralTherapyPage;