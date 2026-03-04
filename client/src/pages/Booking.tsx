import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skillLevel: 'beginner',
    sessionType: 'group',
    preferredDay: '',
    preferredTime: '',
    numberOfParticipants: '1',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Booking request submitted! We\'ll contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        skillLevel: 'beginner',
        sessionType: 'group',
        preferredDay: '',
        preferredTime: '',
        numberOfParticipants: '1',
        notes: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent/5 to-background">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Session</h1>
          <p className="text-xl text-muted-foreground">
            Ready to start your skating journey? Fill out the form below and we'll get you scheduled!
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Session Details</CardTitle>
              <CardDescription>
                Tell us about yourself and your skating goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Personal Information</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                  </div>
                </div>

                {/* Session Preferences */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-semibold text-lg">Session Preferences</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="skillLevel" className="block text-sm font-medium mb-2">
                        Skill Level *
                      </label>
                      <select
                        id="skillLevel"
                        name="skillLevel"
                        value={formData.skillLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced / Pro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sessionType" className="block text-sm font-medium mb-2">
                        Session Type *
                      </label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="group">Group Class</option>
                        <option value="private">Private Coaching</option>
                        <option value="hockey">Roller Hockey</option>
                        <option value="speed">Speed Skating</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDay" className="block text-sm font-medium mb-2">
                        Preferred Day *
                      </label>
                      <select
                        id="preferredDay"
                        name="preferredDay"
                        value={formData.preferredDay}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a day</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (6 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 9 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="numberOfParticipants" className="block text-sm font-medium mb-2">
                      Number of Participants *
                    </label>
                    <input
                      type="number"
                      id="numberOfParticipants"
                      name="numberOfParticipants"
                      value={formData.numberOfParticipants}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-4 border-t pt-6">
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Any special requests or questions?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Your Session'}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm your booking.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/254700056336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  +254 700 056 336
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a
                  href="mailto:josephwachirasejo@gmail.com"
                  className="text-accent hover:underline"
                >
                  josephwachirasejo@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
