import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Users, Award, Activity, Target, Heart, Zap, Waves, Droplets } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chest Physiotherapy for Children | Paediatric Therapy Centre Ahmedabad",
  description: "Specialized respiratory therapy techniques to improve lung function, clear secretions, and enhance breathing in children with respiratory conditions.",
  keywords: ["Chest physiotherapy Ahmedabad", "Pediatric respiratory therapy", "Airway clearance techniques", "Breathing exercises for children"],
};

const ChestPhysiotherapyPage = () => {
  // Structured data for Chest Physiotherapy service
  const chestPhysioSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Chest Physiotherapy",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Paediatric Therapy Centre Ahmedabad"
    },
    "description": "Specialized respiratory therapy techniques to improve lung function, clear secretions, and enhance breathing in children with respiratory conditions.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chestPhysioSchema) }}
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
                🌬️ Respiratory Therapy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Pediatric <span className="text-yellow-300">Chest Physiotherapy</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Specialized techniques to improve lung function, clear secretions, and enhance breathing in children with respiratory conditions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                    <Activity className="w-5 h-5 mr-2" />
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
              <li className="text-gray-600">Chest Physiotherapy</li>
            </ol>
          </div>
        </nav>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Respiratory Support for Children
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our pediatric chest physiotherapy program uses evidence-based techniques to help children with respiratory conditions breathe easier, clear mucus from their airways, and improve overall lung function.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Improved airway clearance",
                    "Enhanced lung expansion",
                    "Reduced respiratory infections",
                    "Increased oxygen saturation",
                    "Better cough effectiveness",
                    "Improved overall respiratory health"
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
                  src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/chest-therapy/chest-1.jpeg"
                  alt="Therapist performing chest physiotherapy on a child"
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
                Benefits of Chest Physiotherapy
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our specialized respiratory techniques provide comprehensive benefits for children with various pulmonary conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Airway Clearance",
                  description: "Helps loosen and remove mucus from the lungs and airways",
                  icon: <Waves className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Improved Breathing",
                  description: "Enhances lung expansion and oxygen exchange",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Infection Prevention",
                  description: "Reduces frequency and severity of respiratory infections",
                  icon: <Heart className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Cough Effectiveness",
                  description: "Strengthens cough mechanism to clear secretions",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Postural Drainage",
                  description: "Uses gravity-assisted positions to drain different lung segments",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Parent Education",
                  description: "Teaches families techniques for home management",
                  icon: <Users className="w-8 h-8 text-blue-600" />
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
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/chest-therapy/chest-2.jpeg"
                      alt="Therapist teaching breathing exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/chest-therapy/chest-3.jpeg"
                      alt="Child using PEP device"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                    <Image
                      src="https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/chest-therapy/chest-1.jpeg"
                      alt="Therapist performing percussion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Chest Physiotherapy Process
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We provide individualized respiratory therapy programs using a combination of manual techniques and specialized equipment tailored to each child's needs.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Respiratory Assessment",
                      description: "Comprehensive evaluation of breathing patterns, lung function, and secretion clearance"
                    },
                    {
                      title: "Customized Treatment Plan",
                      description: "Personalized program based on specific respiratory needs and diagnosis"
                    },
                    {
                      title: "Manual Techniques",
                      description: "Percussion, vibration, and postural drainage to mobilize secretions"
                    },
                    {
                      title: "Breathing Exercises",
                      description: "Techniques to improve lung expansion and strengthen respiratory muscles"
                    },
                    {
                      title: "Airway Clearance Devices",
                      description: "Use of PEP, flutter, or other devices as appropriate"
                    },
                    {
                      title: "Home Program Training",
                      description: "Education for caregivers to continue therapy at home"
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
                Conditions We Treat
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Chest physiotherapy is beneficial for children with various respiratory and neuromuscular conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cystic Fibrosis",
                "Bronchiolitis", 
                "Bronchiectasis",
                "Pneumonia",
                "Chronic Lung Disease",
                "Cerebral Palsy with respiratory involvement",
                "Spinal Muscular Atrophy",
                "Post-operative lung complications",
                "Neuromuscular disorders",
                "Asthma with mucus retention",
                "Recurrent chest infections",
                "Tracheomalacia/Bronchomalacia"
              ].map((condition, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-blue-600" />
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
                Our Chest Physiotherapy Techniques
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Evidence-based respiratory therapy approaches tailored for pediatric patients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Postural Drainage",
                  description: "Positioning techniques to drain different lung segments",
                  icon: <Target className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Percussion & Vibration",
                  description: "Manual techniques to loosen secretions",
                  icon: <Zap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Active Cycle of Breathing",
                  description: "Controlled breathing techniques to mobilize mucus",
                  icon: <Activity className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Airway Clearance Devices",
                  description: "PEP, flutter, and other devices to improve clearance",
                  icon: <Award className="w-8 h-8 text-blue-600" />
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
                Common questions about pediatric chest physiotherapy
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is chest physiotherapy painful for children?",
                  answer: "When performed correctly by our trained therapists, chest physiotherapy should not be painful. We use gentle techniques appropriate for each child's age and condition."
                },
                {
                  question: "How often does my child need chest physiotherapy?",
                  answer: "Frequency depends on the child's condition - it may range from daily sessions during illness to 2-3 times weekly for chronic conditions. We'll create a personalized schedule."
                },
                {
                  question: "Can I learn to do chest physiotherapy at home?",
                  answer: "Yes, we train parents in appropriate techniques for home use, with regular follow-ups to adjust the program as needed."
                },
                {
                  question: "What age can children start chest physiotherapy?",
                  answer: "We provide chest physiotherapy for children of all ages, from infants to adolescents, with techniques adapted for each developmental stage."
                },
                {
                  question: "How long does each session last?",
                  answer: "Sessions typically last 30-45 minutes, depending on the child's tolerance and the techniques being used."
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
              Breathe Easier with Specialized Care
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Help your child achieve better respiratory health with our pediatric chest physiotherapy program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                  <Activity className="w-5 h-5 mr-2" />
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

export default ChestPhysiotherapyPage;