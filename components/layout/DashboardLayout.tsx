import { ReactNode } from "react"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { 
  LayoutDashboard, 
  Video, 
  BarChart2, 
  Settings,
  PlusCircle
} from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Adsai
            </span>
          </Link>
        </div>
        
        <nav className="space-y-1 p-4">
          <Link 
            href="/dashboard" 
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            href="/dashboard/campaigns" 
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Video className="h-5 w-5" />
            <span>Campaigns</span>
          </Link>
          
          <Link 
            href="/dashboard/analytics" 
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            <BarChart2 className="h-5 w-5" />
            <span>Analytics</span>
          </Link>
          
          <Link 
            href="/dashboard/settings" 
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 h-16 border-b bg-white">
          <div className="flex h-full items-center justify-between px-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard/create" 
                className="flex items-center space-x-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                <PlusCircle className="h-5 w-5" />
                <span>Create Ad</span>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
} 