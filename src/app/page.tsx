"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, CheckCircle, Coffee, Flame, Globe, Heart, MapPin, MessageCircle, Settings, Star, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Experience", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Roasted"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="bg-gradient-to-br from-background to-card">
        <div className="py-24 lg:py-32 mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Crafted Coffee, Perfect Moments"
            description="Experience the perfect cup with our expertly roasted beans and artisan brewing techniques. From rich espressos to smooth cold brews, every sip tells a story."
            tag="Freshly Roasted"
            tagIcon={Coffee}
            buttons={[
              { text: "Order Now", href: "contact" },
              { text: "View Menu", href: "product" }
            ]}
            imageSrc="https://images.pexels.com/photos/23384632/pexels-photo-23384632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="Modern coffee shop interior with warm lighting"
          />
        </div>
      </div>

      <div id="about" data-section="about">
        <div className="py-16 lg:py-24 mx-auto px-4 md:px-6">
          <TextAbout
            title="We source the finest coffee beans from sustainable farms around the world, roasting them to perfection in small batches to bring you exceptional flavors in every cup."
            buttons={[
              { text: "Learn Our Story", href: "about" }
            ]}
          />
        </div>
      </div>

      <div id="product" data-section="product" className="bg-card">
        <div className="py-16 lg:py-24 mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Featured Menu"
            description="Discover our signature coffee creations, each crafted with premium ingredients and expert technique"
            tag="Bestsellers"
            tagIcon={Star}
            products={[
              {
                id: "1",
                name: "Signature Espresso",
                price: "$3.50",
                imageSrc: "https://images.pexels.com/photos/1835900/pexels-photo-1835900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Perfect espresso shot"
              },
              {
                id: "2",
                name: "Artisan Latte",
                price: "$4.25",
                imageSrc: "https://images.pexels.com/photos/3310817/pexels-photo-3310817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Latte with beautiful foam art"
              },
              {
                id: "3",
                name: "Cold Brew Delight",
                price: "$3.75",
                imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Refreshing cold brew coffee"
              }
            ]}
          />
        </div>
      </div>

      <div id="feature" data-section="feature">
        <div className="py-16 lg:py-24 mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Coffee Experience"
            description="From bean selection to the perfect brew, every step is crafted with precision and passion"
            tag="Craftsmanship"
            tagIcon={Award}
            features={[
              {
                title: "Expert Roasting",
                description: "Small-batch roasting ensures optimal flavor development and freshness in every bean",
                icon: Flame
              },
              {
                title: "Premium Grinders",
                description: "Professional-grade grinding equipment for consistent particle size and maximum extraction",
                icon: Settings
              },
              {
                title: "Brewing Mastery",
                description: "Multiple brewing methods from pour-over to French press, each perfected by our baristas",
                icon: Coffee
              },
              {
                title: "Quality Control",
                description: "Every cup is tested and approved to meet our exacting standards for taste and aroma",
                icon: CheckCircle
              }
            ]}
          />
        </div>
      </div>

      <div id="metric" data-section="metric" className="bg-gradient-to-r from-background to-card">
        <div className="py-16 lg:py-24 mx-auto px-4 md:px-6">
          <MetricCardOne
            title="Coffee Excellence"
            description="Numbers that reflect our commitment to quality and customer satisfaction"
            tag="Statistics"
            tagIcon={TrendingUp}
            metrics={[
              {
                id: "1",
                value: "5000+",
                title: "cups",
                description: "Served daily to satisfied customers",
                icon: Coffee
              },
              {
                id: "2",
                value: "15",
                title: "origins",
                description: "Coffee sourced from around the world",
                icon: Globe
              },
              {
                id: "3",
                value: "98%",
                title: "rating",
                description: "Customer satisfaction score",
                icon: Heart
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial">
        <div className="py-16 lg:py-24 mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Customers Say"
            description="Real feedback from coffee lovers who visit us daily"
            tag="Reviews"
            tagIcon={MessageCircle}
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "Regular Customer",
                company: "Local Business Owner",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/6612676/pexels-photo-6612676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "Coffee Enthusiast",
                company: "Tech Professional",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/3779631/pexels-photo-3779631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Student",
                company: "University Graduate",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/4350038/pexels-photo-4350038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                id: "4",
                name: "David Kim",
                role: "Morning Regular",
                company: "Finance Analyst",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/22434920/pexels-photo-22434920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="bg-card">
        <div className="py-20 lg:py-28 mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Visit Us"
            title="Experience Perfect Coffee"
            description="Join us for expertly crafted coffee and a warm, welcoming atmosphere. Subscribe to our newsletter for special offers and brewing tips."
            tagIcon={MapPin}
            inputPlaceholder="Enter your email"
            buttonText="Subscribe"
            termsText="By subscribing, you'll receive updates about new blends, events, and exclusive offers."
          />
        </div>
      </div>

      <div id="footer" data-section="footer">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            logoText="Roasted"
            columns={[
              {
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Our Story", href: "about" },
                  { label: "Sustainability", href: "about" }
                ]
              },
              {
                items: [
                  { label: "Menu", href: "product" },
                  { label: "Brewing Methods", href: "feature" },
                  { label: "Coffee Origins", href: "feature" }
                ]
              },
              {
                items: [
                  { label: "Visit Us", href: "contact" },
                  { label: "Contact", href: "contact" },
                  { label: "Newsletter", href: "contact" }
                ]
              }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}