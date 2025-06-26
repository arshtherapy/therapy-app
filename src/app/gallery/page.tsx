"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const Gallery = () => {
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/speech-therapy/speech-1.jpeg",
      alt: "Child engaging in speech therapy exercises with therapist",
      category: "Speech Therapy",
      description: "Therapist working with a child on pronunciation and language development using interactive exercises"
    },
    {
      id: 2,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/speech-therapy/speech-2.jpeg",
      alt: "Therapist using visual aids during speech therapy",
      category: "Speech Therapy",
      description: "Using picture cards and visual supports to enhance vocabulary and communication skills"
    },
    {
      id: 3,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/speech-therapy/speech-4.jpeg",
      alt: "Child practicing speech sounds with therapist",
      category: "Speech Therapy",
      description: "Focused session on improving speech clarity through phonetic exercises"
    },
    {
      id: 4,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/speech-therapy/speech-5.jpeg",
      alt: "Interactive speech therapy session with toys",
      category: "Speech Therapy",
      description: "Play-based therapy using toys to encourage natural language development"
    },
    {
      id: 5,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/speech-therapy/speech-6.jpeg",
      alt: "Therapist modeling speech sounds for child",
      category: "Speech Therapy",
      description: "Demonstrating proper mouth and tongue positioning for accurate sound production"
    },
    {
      id: 6,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/speech-therapy/speech-7.jpeg",
      alt: "Child engaged in conversation practice",
      category: "Speech Therapy",
      description: "Developing social communication skills through structured conversation practice"
    },
    {
      id: 7,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/sensory-therapy/sensory-1.jpeg",
      alt: "Child exploring sensory materials",
      category: "Sensory Therapy",
      description: "Tactile exploration with various textures to improve sensory processing"
    },
    {
      id: 8,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/sensory-therapy/sensory-2.jpeg",
      alt: "Therapist guiding sensory integration activities",
      category: "Sensory Therapy",
      description: "Structured sensory integration session using specialized equipment"
    },
    {
      id: 9,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/sensory-therapy/sensory-3.jpeg",
      alt: "Child using sensory swing",
      category: "Sensory Therapy",
      description: "Vestibular input through swinging to improve balance and body awareness"
    },
    {
      id: 10,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/sensory-therapy/sensory-4.jpeg",
      alt: "Therapist facilitating sensory play",
      category: "Sensory Therapy",
      description: "Multi-sensory play session to enhance cognitive and motor skills"
    },
    {
      id: 11,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/physical-therapy/physical-1.jpeg",
      alt: "Child performing physical therapy exercises",
      category: "Physical Therapy",
      description: "Guided exercises to improve strength, coordination, and motor skills"
    },
    {
      id: 12,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/physical-therapy/physical-2.jpeg",
      alt: "Therapist assisting with balance training",
      category: "Physical Therapy",
      description: "Balance and postural control exercises using specialized equipment"
    },
    {
      id: 13,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/physical-therapy/physical-3.jpeg",
      alt: "Child working on gross motor skills",
      category: "Physical Therapy",
      description: "Developing core strength and gross motor coordination"
    },
    {
      id: 14,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/physical-therapy/physical-4.jpeg",
      alt: "Therapist guiding fine motor activities",
      category: "Physical Therapy",
      description: "Fine motor skill development through targeted hand exercises"
    },
    {
      id: 15,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/aquatic-therapy/aquatic-1.jpeg",
      alt: "Child participating in aquatic therapy",
      category: "Aquatic Therapy",
      description: "Water-based therapy session to improve mobility in a low-impact environment"
    },
    {
      id: 16,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/aquatic-therapy/aquatic-2.jpeg",
      alt: "Therapist conducting aquatic exercises",
      category: "Aquatic Therapy",
      description: "Hydrotherapy techniques to enhance muscle strength and coordination"
    },
    {
      id: 17,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/clinic-photos/clinic-1.jpeg",
      alt: "Therapy center waiting area",
      category: "Clinic Photos",
      description: "Our welcoming reception and waiting area for families"
    },
    {
      id: 18,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/clinic-photos/clinic-2.jpeg",
      alt: "Therapy room with specialized equipment",
      category: "Clinic Photos",
      description: "One of our fully-equipped therapy rooms designed for various interventions"
    },
    {
      id: 19,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/clinic-photos/clinic-3.jpeg",
      alt: "Sensory integration room",
      category: "Clinic Photos",
      description: "Our sensory room with specialized equipment for sensory integration therapy"
    },
    {
      id: 20,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/clinic-photos/clinic-4.jpeg",
      alt: "Speech therapy workstation",
      category: "Clinic Photos",
      description: "Dedicated space for speech and language therapy sessions"
    },
    {
      id: 21,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/clinic-photos/clinic-5.jpeg",
      alt: "Physical therapy area",
      category: "Clinic Photos",
      description: "Spacious area equipped for physical therapy and motor skill development"
    },
    {
      id: 22,
      src: "https://pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev/arsh-gallery/clinic-photos/clinic-6.jpeg",
      alt: "Child-friendly therapy environment",
      category: "Clinic Photos",
      description: "Our bright and engaging therapy space designed for children's comfort"
    },
    
  ];

  const [shuffledImages, setShuffledImages] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const shuffleArray = (array: GalleryImage[]): GalleryImage[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const filtered = activeCategory === "All" 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeCategory);
    setShuffledImages(shuffleArray(filtered));
  }, [activeCategory]);

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look inside our therapy centers in Juhapura and Navrangpura. 
            See our modern facilities, equipment, and the welcoming environment we&apos;ve created for children and families.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 ${
                activeCategory === category
                  ? "bg-primary-500 hover:bg-primary-600 text-white"
                  : "border-primary-200 text-primary-600 hover:bg-primary-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledImages.map((image) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer border-2 border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0 relative">
                <div className="aspect-square relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-primary-600">{image.category}</span>
                </div>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary-50 rounded-3xl p-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
            Visit Our Centers
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Experience our welcoming environment in person. Schedule a tour of our facilities 
            and see how we can help your child thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3 text-lg">
              Schedule a Tour
            </Button>
            <Button variant="outline" className="border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-3 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;