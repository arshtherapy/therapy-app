import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Users, Award, Activity, Target, Heart, Zap, MessageSquare, Mic, Ear, Languages } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Verbal Behavior Training for Children | Paediatric Therapy Centre Ahmedabad",
  description: "Evidence-based verbal behavior intervention using ABA principles to develop communication skills in children with speech and language delays.",
  keywords: ["Verbal behavior training Ahmedabad", "ABA speech therapy", "Communication skills for autism", "Verbal behavior intervention"],
};

const VerbalBehaviorTrainingPage = () => {
  // Structured data for VBT service
  const vbtSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Verbal Behavior Training",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Evidence-based verbal behavior intervention using ABA principles to develop communication skills in children with speech and language delays.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vbtSchema) }}
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
                🗣️ Communication Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Verbal <span className="text-yellow-300">Behavior Training</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                ABA-based intervention to develop functional communication skills in children with speech and language delays or autism spectrum disorder.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <MessageSquare className="w-5 h-5 mr-2" />
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
              <li className="text-gray-600">Verbal Behavior Training</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Functional Communication Skills
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Verbal Behavior Training program uses Applied Behavior Analysis (ABA) principles to teach children how to use language functionally across different settings and with various communication partners.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Based on B.F. Skinner's analysis of verbal behavior",
                    "Focuses on functional communication",
                    "Teaches language as a learned behavior",
                    "Uses positive reinforcement strategies",
                    "Individualized to each child's needs",
                    "Parent training included"
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
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-1.jpeg"
                  alt="Therapist conducting verbal behavior training session"
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
                Benefits of Verbal Behavior Training
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our ABA-based approach helps children develop practical communication skills for daily life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Functional Communication",
                  description: "Teaches language that serves practical purposes",
                  icon: <MessageSquare className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Verbal Operants",
                  description: "Develops different language functions (mands, tacts, etc.)",
                  icon: <Mic className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Behavior Reduction",
                  description: "Replaces challenging behaviors with communication",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Generalization",
                  description: "Skills transfer across people, settings and materials",
                  icon: <Users className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Listener Skills",
                  description: "Improves understanding and following directions",
                  icon: <Ear className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Social Interaction",
                  description: "Enhances conversational and play skills",
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

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-2.jpeg"
                      alt="Therapist using picture cards during VBT session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-1.jpeg"
                      alt="Child practicing communication during snack time"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/vbt-therapy/vbt-2.jpeg"
                      alt="Parent training session for verbal behavior techniques"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Verbal Behavior Training Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We implement evidence-based ABA techniques to build functional communication skills through structured yet naturalistic teaching methods.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Assessment",
                      description: "VB-MAPP or other assessment to identify communication level"
                    },
                    {
                      title: "Mand Training",
                      description: "Teaching requesting as first verbal operant"
                    },
                    {
                      title: "Tact Training",
                      description: "Developing labeling/naming skills"
                    },
                    {
                      title: "Listener Responding",
                      description: "Building receptive language skills"
                    },
                    {
                      title: "Intraverbal Training",
                      description: "Developing conversational skills"
                    },
                    {
                      title: "Generalization",
                      description: "Ensuring skills transfer to natural environments"
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
                Who Benefits from VBT?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Verbal Behavior Training helps children with various communication challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Autism Spectrum Disorder",
                "Speech/Language Delays", 
                "Apraxia of Speech",
                "Down Syndrome",
                "Global Developmental Delay",
                "Nonverbal or Minimally Verbal",
                "Expressive Language Disorder",
                "Genetic Disorders",
                "Cerebral Palsy",
                "Hearing Impairments",
                "Cognitive Disabilities",
                "Social Communication Disorder"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
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
                Key Verbal Behavior Techniques
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Evidence-based methods we use to develop communication skills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Mand Training",
                  description: "Teaching requests for wants/needs",
                  icon: <Mic className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Discrete Trial Training",
                  description: "Structured teaching of specific skills",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Natural Environment Teaching",
                  description: "Incidental teaching in daily contexts",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Errorless Learning",
                  description: "Minimizing errors during skill acquisition",
                  icon: <CheckCircle className="w-8 h-8 text-blue-600" />
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
                Common questions about Verbal Behavior Training
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How is VBT different from traditional speech therapy?",
                  answer: "VBT focuses specifically on the function of language using ABA principles, while traditional speech therapy often focuses more on articulation and language structure."
                },
                {
                  question: "What age is best to start VBT?",
                  answer: "Early intervention is ideal - we work with children as young as 18 months. The earlier communication skills are taught, the better the outcomes."
                },
                {
                  question: "How long does it take to see results?",
                  answer: "Many children show progress within weeks, especially with manding (requesting), but comprehensive language development is an ongoing process."
                },
                {
                  question: "Do you use PECS (Picture Exchange System)?",
                  answer: "Yes, we incorporate PECS when appropriate as a bridge to vocal communication or for children who need augmentative systems."
                },
                {
                  question: "Can VBT help nonverbal children?",
                  answer: "Absolutely. VBT is particularly effective for nonverbal children, using alternative communication methods that may lead to vocal speech."
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
              Unlock Your Child's Communication Potential
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our Verbal Behavior Training program provides evidence-based strategies to develop meaningful communication skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <MessageSquare className="w-5 h-5 mr-2" />
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

export default VerbalBehaviorTrainingPage;