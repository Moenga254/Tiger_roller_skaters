import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Whether you're looking to take your first steps on skates or refine your skills, Tiger Roller Skaters is the perfect place to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="#skating-classes" className="px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors inline-block">
              Skating Classes
            </a>
            <a href="#community-events" className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors inline-block">
              Community Events
            </a>
            <a href="#supportive-environment" className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors inline-block">
              Supportive Environment
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speed Skating Card */}
            <Card className="hover:shadow-lg transition-shadow">
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
            <Card className="hover:shadow-lg transition-shadow">
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
            <Card className="hover:shadow-lg transition-shadow">
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

      {/* Skating Classes Section */}
      <section id="skating-classes" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skating Classes</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Three Levels of Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2"> Beginner Level</h3>
                <p className="text-muted-foreground">Perfect for those just starting their skating journey. Learn fundamental techniques, balance, and safety.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2"> Intermediate Level</h3>
                <p className="text-muted-foreground">Build on your skills with advanced techniques, speed control, and more complex maneuvers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2"> Pro Level</h3>
                <p className="text-muted-foreground">Master advanced techniques, competitive racing, and specialized skating disciplines.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing & Packages</h2>
          
          <div className="space-y-8">
            {/* Home Coaching */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl"> Home Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We coach along your residences or estates with flexible scheduling:
                </p>
                <p className="text-3xl font-bold text-yellow-500 mb-4">
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
                <CardTitle className="text-2xl"> Term-Based Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-2">Standard Classes</p>
                    <p className="text-3xl font-bold text-yellow-500">KSH 3,000 per term</p>
                    <p className="text-sm text-muted-foreground">10-12 lessons per term</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-lg mb-2">Classes with Roller Hockey</p>
                    <p className="text-3xl font-bold text-yellow-500">KSH 3,500 per term</p>
                    <p className="text-sm text-muted-foreground">Includes roller hockey lesson</p>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">✓ All skating gear provided during practice lessons</p>
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

      {/* Community Events Section */}
      <section id="community-events" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Community Events</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Tiger Roller Skaters regularly organizes community events to bring skaters together, celebrate achievements, and foster a supportive community spirit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span>Monthly skating competitions and races</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">🎉</span>
                  <span>Community skating sessions and social events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>Skill showcases and performances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">👥</span>
                  <span>Team building and group activities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Supportive Environment Section */}
      <section id="supportive-environment" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Supportive Environment</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                At Tiger Roller Skaters, we believe in creating a welcoming, inclusive, and supportive environment where every skater can thrive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span>Experienced and passionate coaches dedicated to your success</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>Diverse and welcoming community of all ages and skill levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>Safe and well-maintained skating facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>Personalized coaching and progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>Continuous learning and skill development opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-yellow-100 dark:bg-yellow-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Target Groups</h2>
          <p className="text-center text-muted-foreground mb-12">
            We have also collaborated with other leading companies to bring you the best skating experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'School Students', icon: '🎓' },
              { title: 'Youth Community Groups', icon: '👥' },
              { title: 'College & University Students', icon: '🏫' },
              { title: 'Adult Beginners', icon: '🎯' },
              { title: 'Skateboarding Enthusiasts', icon: '🛹' },
            ].map((group, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{group.icon}</div>
                  <p className="font-semibold text-sm md:text-base">{group.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
