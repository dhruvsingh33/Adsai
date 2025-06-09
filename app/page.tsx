import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { ArrowRight, Video, Palette, Mic, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Create Stunning AI Video Ads Instantly
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your ideas into professional video ads with the power of AI. No design skills required.
          </p>
          <Button size="lg" className="gap-2">
            Generate Now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Video className="w-6 h-6" />}
              title="Text to Video"
              description="Convert your text descriptions into engaging video content automatically."
            />
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title="Professional Templates"
              description="Choose from hundreds of pre-designed templates for any industry."
            />
            <FeatureCard
              icon={<Mic className="w-6 h-6" />}
              title="AI Voiceover"
              description="Generate natural-sounding voiceovers in multiple languages."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-muted-foreground mb-8">
              We're on a mission to democratize video ad creation. Our AI-powered platform
              makes it possible for anyone to create professional-quality video ads in minutes,
              not days.
            </p>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © 2024-25 Adsai. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-background border shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
} 