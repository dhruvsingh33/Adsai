import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/adsailogo.png" alt="Adsai" width={48} height={48} className="object-contain" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Adsai
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-purple-600 transition-all duration-300 ease-in-out hover:text-purple-800 hover:scale-110 font-medium">
            Home
          </Link>
          <Link href="/features" className="text-purple-600 transition-all duration-300 ease-in-out hover:text-purple-800 hover:scale-110 font-medium">
            Features
          </Link>
          <Link href="/terms" className="text-purple-600 transition-all duration-300 ease-in-out hover:text-purple-800 hover:scale-110 font-medium">
            Terms
          </Link>
          <Link href="/privacy" className="text-purple-600 transition-all duration-300 ease-in-out hover:text-purple-800 hover:scale-110 font-medium">
            Privacy
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
} 