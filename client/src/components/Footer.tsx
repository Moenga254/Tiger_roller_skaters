import React, { JSX } from 'react';
import { Mail, MapPin, Phone, Instagram, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>Tiger Roller Skaters</span>
            </h3>
            <p className="text-sm opacity-80">
              A vibrant skating community in Nairobi, Kenya dedicated to fostering passion and skill.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="opacity-80 hover:opacity-100 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="opacity-80 hover:opacity-100 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="opacity-80 hover:opacity-100 transition">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Speed Skating</li>
              <li className="opacity-80">Roller Hockey</li>
              <li className="opacity-80">Fun Skating</li>
              <li className="opacity-80">Private Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/254700056336" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
                  +254 700 056 336
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:josephwachirasejo@gmail.com" className="opacity-80 hover:opacity-100 transition">
                  Email Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="opacity-80">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex justify-center gap-6 flex-wrap">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@tigerrollerskaters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition font-semibold"
              title="Follow us on TikTok"
            >
              <Music className="w-5 h-5" />
              <span>TikTok</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tigerrollerskaters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition font-semibold"
              title="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254700056336"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition font-semibold"
              title="Chat with us on WhatsApp"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
          <p>© 2025 Tiger Roller Skaters. All rights reserved.</p>
          <p className="mt-2">Nairobi, Kenya | Skating Community</p>
        </div>
      </div>
    </footer>
  );
}
