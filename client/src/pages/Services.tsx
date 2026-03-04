import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Users, Trophy, MapPin, Clock, Users2 } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're looking to take your first steps on skates or refine your skills, Tiger Roller Skaters is the perfect place to start.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Speed Skating Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/services-speed-skating-F8Bgt9GTNnu5wYLNSny4qg.webp"
                  alt="Speed Skating"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Speed Skating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Speed skating involves stamina and skill, which we build through regular races and drills. Perfect for those looking to push their limits.
                </p>
              </CardContent>
            </Card>

            {/* Roller Hockey Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/services-roller-hockey-f52WUmv2oWZQLdTYPB6Ynp.webp"
                  alt="Roller Hockey"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Roller Hockey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A fun, high-energy sport played on a dry surface using wheeled skates. Great for teamwork and competitive spirit.
                </p>
              </CardContent>
            </Card>

            {/* Fun Skating Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/services-fun-skating-CZ5rSWKiUTqBNwcm76NEZr.webp"
                  alt="Fun Skating"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Fun Skating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We invite all students to join the fun of this extreme sport through safe, guided instruction. Perfect for all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing & Packages</h2>
          
          <div className="space-y-8">
            {/* Skill Levels */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Skill Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We offer three levels of skating classes tailored to your experience and goals:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Beginner</strong> — Perfect for those just starting their skating journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Intermediate</strong> — For skaters with basic skills looking to improve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Pro</strong> — Advanced training for competitive and experienced skaters</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Home Coaching */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-accent" />
                  Home Coaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We coach along your residences or estates with flexible scheduling:
                </p>
                <p className="text-2xl font-bold text-accent mb-4">
                  KSH 1,200 - 1,500 per session
                </p>
                <p className="text-sm text-muted-foreground">
                  Negotiable depending on your location distance
                </p>
              </CardContent>
            </Card>

            {/* Term-Based Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Clock className="w-6 h-6 text-accent" />
                  Term-Based Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-2">Standard Classes</p>
                    <p className="text-2xl font-bold text-accent">KSH 3,000 per term</p>
                    <p className="text-sm text-muted-foreground">10-12 lessons per term</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-lg mb-2">Classes with Roller Hockey</p>
                    <p className="text-2xl font-bold text-accent">KSH 3,500 per term</p>
                    <p className="text-sm text-muted-foreground">Includes roller hockey lesson</p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-accent">✓ All skating gear provided during practice lessons</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Our Training Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Skating is very safe when done with proper training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Requires balance, skill, discipline, self-confidence, and consistent practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>We provide instruction in all these areas while making learning fun</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'School Students', icon: '🎓' },
              { title: 'Youth Community Groups', icon: '👥' },
              { title: 'College & University Students', icon: '🏫' },
              { title: 'Adult Beginners', icon: '🎯' },
              { title: 'Skateboarding Enthusiasts', icon: '🛹' },
              { title: 'Professional Athletes', icon: '🏆' },
            ].map((group, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <p className="font-semibold text-lg">{group.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              We have also collaborated with other leading companies and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your skill level and book your first session today.
          </p>
          <Button size="lg" asChild>
            <a href="/booking">Book Your Session</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
