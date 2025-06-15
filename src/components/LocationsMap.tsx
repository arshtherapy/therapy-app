
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationsMap = () => {
  const locations = [
   {
  name: "Juhapura Center",
  address: "A block Himalaya falaknuma, 101 A, behind ROYAL AKBAR TOWER, Quresh Nagar Society, Juhapura, Ahmedabad, Gujarat 380055",
  phone: "+91-9876543210",
  hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.745403274024!2d72.5210613150967!3d22.995396085006797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e852bee2ab5f7%3A0xa43a724db3972ba2!2sArsh%20paediatric%20rehabilitation%20center!5e0!3m2!1sen!2sin!4v1718456380000!5m2!1sen!2sin"
}
,
    {
      name: "Navrangpura Center", 
      address: "704, addor ambition, Navrang Cir, Vithalbhai Patel Colony, Nathalal Colony, Navrangpura, Ahmedabad, Gujarat 380009",
      phone: "+91-9876543211",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.381671864798!2d72.55834949999999!3d23.046464799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d48ebc5f17%3A0x427514eb9e77302!2sArsh%20Paediatric%20Rehabilitation%20Center!5e0!3m2!1sen!2sin!4v1749986108114!5m2!1sen!2sin"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
            Our Locations in Ahmedabad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at our convenient locations in Juhapura and Navrangpura for comprehensive paediatric therapy services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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

                {/* Location Info */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a href={`tel:${location.phone}`} className="text-primary-600 hover:text-primary-700">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Hours</p>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white rounded-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary-200 text-primary-600 hover:bg-primary-50 rounded-full">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
