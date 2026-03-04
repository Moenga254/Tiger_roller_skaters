import { HeroSection } from '@/components/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Users, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      
      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To inspire, nurture, and develop the skills of skaters in Nairobi and beyond. We believe in promoting a healthy and active lifestyle through skating, while emphasizing teamwork and sportsmanship.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a community where skating is not just a sport but a way of life. As we continue to grow, we aim to make skating accessible and enjoyable for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Tiger Roller Skaters?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Expert Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from experienced coaches who are passionate about skating and dedicated to your success.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Vibrant Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a dynamic community of skaters of all ages and skill levels united by passion.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Trophy className="w-8 h-8 text-accent mb-2" />
                <CardTitle>All Skill Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From beginners to advanced, we have programs tailored to your skill level and goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your skating journey today with Tiger Roller Skaters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/booking">Book Your First Session</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/services">Learn More</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
