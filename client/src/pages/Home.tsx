import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Card, CardContent } from '@/components/ui/card';

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
          {/* Tiger Roller Logo */}
          <div className="flex justify-center mb-8 md:mb-10">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402898195/kgAVhJswmeuxjzz8evqx4U/tiger_logo_573bc4d6.png"
              alt="Tiger Roller Skaters Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-accent"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground text-center">
            About Tiger Roller Skaters
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-muted-foreground">
            Join Tiger Roller Skaters, a vibrant community in Nairobi where passion meets skill. 
            Learn from experienced coaches and skate with friends in a supportive, fun environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <Card>
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3"> Our Mission</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  To inspire and empower individuals through the art and sport of roller skating.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3"> Community</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Build lasting friendships with skaters of all levels in a welcoming environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3"> Excellence</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Professional coaching and training for every skill level, from beginner to pro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
