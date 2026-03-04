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
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
            About Tiger Roller Skaters
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground">
            Join Tiger Roller Skaters, a vibrant community in Nairobi where passion meets skill. 
            Learn from experienced coaches and skate with friends in a supportive, fun environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <Card>
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">🎯 Our Mission</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  To inspire and empower individuals through the art and sport of roller skating.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">👥 Community</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Build lasting friendships with skaters of all levels in a welcoming environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">🏆 Excellence</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Professional coaching and training for every skill level, from beginner to pro.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="/booking">Book Your Session</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
