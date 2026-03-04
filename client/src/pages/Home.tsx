import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const videoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Tiger_68d3192c.mp4';
  const bgImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/Tiger_49e0b248.jpg';

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={videoUrl}
        bgImageSrc={bgImageUrl}
        title="Master the Art of Roller Skating"
        date="Tiger Roller Skaters"
        scrollToExpand="Scroll to Expand"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            About Tiger Roller Skaters
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join Tiger Roller Skaters, a vibrant community in Nairobi where passion meets skill. 
            Learn from experienced coaches and skate with friends in a supportive, fun environment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">🎯 Our Mission</h3>
                <p className="text-muted-foreground">
                  To inspire and empower individuals through the art and sport of roller skating.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">👥 Community</h3>
                <p className="text-muted-foreground">
                  Build lasting friendships with skaters of all levels in a welcoming environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">🏆 Excellence</h3>
                <p className="text-muted-foreground">
                  Professional coaching and training for every skill level, from beginner to pro.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="/booking">Book Your Session</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
