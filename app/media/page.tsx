import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Download, Trash2, Share2 } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

const mediaItems = [
  {
    id: 1,
    title: "Product Launch Video",
    date: "2024-03-15",
    duration: "0:30",
    thumbnail: "/media/product-launch.jpg",
  },
  {
    id: 2,
    title: "Brand Story Ad",
    date: "2024-03-14",
    duration: "1:00",
    thumbnail: "/media/brand-story.jpg",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    date: "2024-03-13",
    duration: "0:45",
    thumbnail: "/media/social-campaign.jpg",
  },
]

export default function MediaPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Media</h1>
            <Button>Upload New</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-sm">
                    {item.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Created on {item.date}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="ml-auto">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 