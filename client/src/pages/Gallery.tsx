import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Gallery() {
  const testimonials = [
    {
      name: 'Sarah Mwangi',
      role: 'Student',
      content: 'Tiger Roller Skaters transformed my confidence! The coaches are amazing and the community is so supportive.',
      rating: 5,
    },
    {
      name: 'James Kipchoge',
      role: 'College Student',
      content: 'Best decision I made! The training is professional, fun, and I\'ve made great friends here.',
      rating: 5,
    },
    {
      name: 'Maria Okonkwo',
      role: 'Parent',
      content: 'My kids love coming here. The coaches are patient and make learning skating enjoyable and safe.',
      rating: 5,
    },
    {
      name: 'David Kariuki',
      role: 'Beginner',
      content: 'Started as a complete beginner and now I\'m skating confidently. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Emily Njoroge',
      role: 'Advanced Skater',
      content: 'The pro-level training pushed me to new heights. The community here is incredible.',
      rating: 5,
    },
    {
      name: 'Peter Ochieng',
      role: 'Roller Hockey Player',
      content: 'The hockey training is intense and rewarding. Best coaching in Nairobi!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery & Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            See what our community has to say about their experience with Tiger Roller Skaters.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Skaters Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
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
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-20 px-6 bg-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Follow Our Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stay updated with our latest events, training sessions, and community highlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
