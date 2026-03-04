import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Gallery1_bc1351e1.jpg',
      alt: 'Tiger Roller Skaters community moment',
      title: 'Community Skating',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Gallery2_47945c86.jpg',
      alt: 'Roller skating action shot',
      title: 'Speed Skating',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Gallery4_43c1e575.jpg',
      alt: 'Roller hockey match',
      title: 'Roller Hockey',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Gallery6_3ecec856.jpg',
      alt: 'Beginner training class',
      title: 'Beginner Training',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Gallery7_11abd4eb.jpg',
      alt: 'Community event',
      title: 'Community Event',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Gallery8_db0b74a0.jpg',
      alt: 'Advanced skating skills',
      title: 'Advanced Skills',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mwangi',
      role: 'Student',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Testimonial1_a2c1e02b.jpg',
      content: 'Tiger Roller Skaters transformed my confidence! The coaches are amazing and the community is so supportive. I went from being scared to falling to performing tricks!',
      rating: 5,
    },
    {
      name: 'James Kipchoge',
      role: 'College Student',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Testimonial2_0a9d08cb.jpg',
      content: 'Best decision I made! The training is professional, fun, and I\'ve made great friends here. The roller hockey sessions are intense and rewarding.',
      rating: 5,
    },
    {
      name: 'Maria Okonkwo',
      role: 'Parent',
      content: 'My kids love coming here. The coaches are patient and make learning skating enjoyable and safe. I can see their confidence growing every week.',
      rating: 5,
    },
    {
      name: 'David Kariuki',
      role: 'Beginner',
      content: 'Started as a complete beginner and now I\'m skating confidently. The step-by-step approach and encouragement from the team made all the difference!',
      rating: 5,
    },
    {
      name: 'Emily Njoroge',
      role: 'Advanced Skater',
      content: 'The pro-level training pushed me to new heights. The community here is incredible and everyone supports each other\'s growth.',
      rating: 5,
    },
    {
      name: 'Peter Ochieng',
      role: 'Roller Hockey Player',
      content: 'The hockey training is intense and rewarding. Best coaching in Nairobi! The team dynamics and competitive spirit here are unmatched.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery & Testimonials</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            See our community in action and hear what our skaters have to say about their experience.
          </p>
        </div>
      </section>

      {/* Gallery Images Section */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Follow Our Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Skaters Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Ready to start your roller skating journey? Connect with us on social media or book your first session today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="https://www.tiktok.com/@tigerrollerskaters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              🎵 Follow on TikTok
            </a>
            <a
              href="https://www.instagram.com/tigerrollerskaters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              📷 Follow on Instagram
            </a>
            <a
              href="https://wa.me/254700056336"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
