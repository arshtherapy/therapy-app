"use client";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Head from 'next/head';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      name: "Juhapura Center",
      address: "A block Himalaya falaknuma, 101 A, behind ROYAL AKBAR TOWER, Quresh Nagar Society, Juhapura, Ahmedabad, Gujarat 380055",
      phone: "+91-9998162680",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      email: "arshprc@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.745403274024!2d72.5210613150967!3d22.995396085006797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e852bee2ab5f7%3A0xa43a724db3972ba2!2sArsh%20paediatric%20rehabilitation%20center!5e0!3m2!1sen!2sin!4v1718456380000!5m2!1sen!2sin",
      schema: {
        "@type": "MedicalOrganization",
        "name": "Arsh Paediatric Rehabilitation Center - Juhapura",
        "image": "https://www.arshchildtherapy.com/favicon.ico",
        "telephone": "+91-9998162680",
        "email": "arshprc@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A block Himalaya falaknuma, 101 A, behind ROYAL AKBAR TOWER, Quresh Nagar Society",
          "addressLocality": "Juhapura",
          "addressRegion": "Gujarat",
          "postalCode": "380055",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "priceRange": "$$",
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://www.instagram.com/yourprofile"
        ]
      }
    },
    {
      name: "Navrangpura Center", 
      address: "704, addor ambition, Navrang Cir, Vithalbhai Patel Colony, Nathalal Colony, Navrangpura, Ahmedabad, Gujarat 380009",
      phone: "+91-9998162680",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      email: "arshprc@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.381671864798!2d72.55834949999999!3d23.046464799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d48ebc5f17%3A0x427514eb9e77302!2sArsh%20Paediatric%20Rehabilitation%20Center!5e0!3m2!1sen!2sin!4v1749986108114!5m2!1sen!2sin",
      schema: {
        "@type": "MedicalOrganization",
        "name": "Arsh Paediatric Rehabilitation Center - Navrangpura",
        "image": "https://www.arshchildtherapy.com/favicon.ico",
        "telephone": "+91-9998162680",
        "email": "arshprc@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "704, addor ambition, Navrang Cir, Vithalbhai Patel Colony, Nathalal Colony",
          "addressLocality": "Navrangpura",
          "addressRegion": "Gujarat",
          "postalCode": "380009",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "priceRange": "$$",
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://www.instagram.com/yourprofile"
        ]
      }
    }
  ];

  // Generate JSON-LD for locations
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": locations.map(loc => loc.schema)
  };

  return (
    <>
      <Head>
        <title>Contact Us | Arsh Paediatric Rehabilitation Center | Ahmedabad</title>
        <meta name="description" content="Contact Arsh Paediatric Rehabilitation Center in Ahmedabad for child therapy services. We have centers in Juhapura and Navrangpura. Call +91-9998162680." />
        <meta name="keywords" content="paediatric therapy, child rehabilitation, speech therapy Ahmedabad, occupational therapy, autism treatment, child development center" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arshchildtherapy.com/contact" />
        <meta property="og:title" content="Contact Arsh Paediatric Rehabilitation Center | Ahmedabad" />
        <meta property="og:description" content="Get in touch with our expert paediatric therapists in Ahmedabad. We offer comprehensive child rehabilitation services at our Juhapura and Navrangpura centers." />
        <meta property="og:image" content="https://res.cloudinary.com/dicvxuysv/image/upload/v1749281479/WhatsApp_Image_2025-06-03_at_11.03.20_hqtuts.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.arshchildtherapy.com/contact" />
        <meta property="twitter:title" content="Contact Arsh Paediatric Rehabilitation Center | Ahmedabad" />
        <meta property="twitter:description" content="Connect with top paediatric therapists in Ahmedabad for your child's developmental needs. Call +91-9998162680 today." />
        <meta property="twitter:image" content="https://www.arshchildtherapy.com/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.arshchildtherapy.com/contact" />
      </Head>

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Contact</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Contact Our Paediatric Therapy Centers in Ahmedabad
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to take the first step toward your child&#39;s development? Contact our expert therapists at Arsh Paediatric Rehabilitation Center. 
              We serve families across Ahmedabad with centers conveniently located in Juhapura and Navrangpura.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="border-2 border-gray-100 rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&#39;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="rounded-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="rounded-full"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a service</option>
                      <option value="speech-therapy">Speech Therapy</option>
                      <option value="physiotherapy">Paediatric Physiotherapy</option>
                      <option value="occupational-therapy">Occupational Therapy</option>
                      <option value="autism-aba">Autism & ABA Therapy</option>
                      <option value="sensory-integration">Sensory Integration</option>
                      <option value="developmental-screening">Developmental Screening</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="rounded-2xl"
                      placeholder="Tell us about your child's needs or any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-full py-3 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-gray-100 rounded-3xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-gray-800">Get in Touch</CardTitle>
                  <CardDescription>
                    Contact us directly through any of these methods for paediatric therapy services in Ahmedabad.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Call Us</h4>
                      <p className="text-gray-600">+91-9998162680</p>
                      <p className="text-gray-600">+91-9998162680</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <p className="text-gray-600">+91-9998162680</p>
                      <p className="text-sm text-primary-600">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email Us</h4>
                      <p className="text-gray-600">arshprc@gmail.com</p>
                      <p className="text-sm text-primary-600">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Operating Hours</h4>
                      <p className="text-gray-600">Monday - Saturday</p>
                      <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                      <p className="text-sm text-red-600">Closed on Sundays</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={`https://wa.me/${encodeURIComponent("+91-9998162680")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 flex-1 border border-primary-200 text-white hover:bg-green-600 rounded-full px-4 py-2 flex items-center justify-center transition"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Now
                </a>  
                <a 
                  href={`tel:+91-9998162680`}
                  className="flex-1 border border-primary-200 bg-primary-500 text-white hover:bg-primary-600 rounded-full px-4 py-2 flex items-center justify-center transition"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>

            
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Our Ahmedabad Locations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at either of our conveniently located centers in Ahmedabad, serving families across the city.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="border-2 border-gray-100 rounded-3xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-xl font-poppins text-gray-800">
                      <MapPin className="w-6 h-6 text-primary-500" />
                      <span>{location.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Map */}
                    <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${location.name}`}
                      ></iframe>
                    </div>

                    {/* Location Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                        <p className="text-gray-600" itemScope itemType="http://schema.org/PostalAddress">
                          <span itemProp="streetAddress">{location.address.split(',')[0]}</span>,
                          <span itemProp="addressLocality"> {location.address.split(',')[1]}</span>,
                          <span itemProp="addressRegion"> {location.address.split(',')[2]}</span>
                          <span itemProp="postalCode"> {location.address.split(',')[3]}</span>
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                          <p className="text-primary-600">
                            <a href={`tel:${location.phone}`} itemProp="telephone">{location.phone}</a>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                          <p className="text-primary-600">
                            <a href={`mailto:${location.email}`} itemProp="email">{location.email}</a>
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                        <p className="text-gray-600" itemProp="openingHours">{location.hours}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href={`tel:${location.phone}`}
                          className="bg-primary-500 flex-1 border border-primary-200 text-white hover:bg-primary-600 rounded-full px-4 py-2 flex items-center justify-center transition"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-4 py-2 flex items-center justify-center transition"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                What Parents Say About Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from families who have experienced our paediatric therapy services firsthand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-100 rounded-3xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Farhad allam khan</h4>
                    <p className="text-sm text-gray-500">Parent of 2-year-old</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  Both Adil sir and nilofer madam are very talented and experienced doctor.
Monitoring juniors and taking proper care of children having physio issues . I strongly recommend arsh rehabilitation center for paediatric physio issues.
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </Card>

              <Card className="border-2 border-gray-100 rounded-3xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                    PK
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Makwana BHARAT</h4>
                    <p className="text-sm text-gray-500">Parent of 3-year-old</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  This center is very cool. All the people working here have a very cool personality, they are very smart.
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </Card>

              <Card className="border-2 border-gray-100 rounded-3xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                    RM
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Rahul Mehta</h4>
                    <p className="text-sm text-gray-500">Parent of 5-year-old</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;The physiotherapy team helped my son with cerebral palsy improve his mobility significantly. The center has excellent facilities.&quot;
                </p>
                <div className="flex mt-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;