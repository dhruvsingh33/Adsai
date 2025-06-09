import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

const templates = [
  {
    id: 1,
    title: "Product Showcase",
    description: "Perfect for showcasing your products with dynamic transitions",
    thumbnail: "/templates/product-showcase.jpg",
  },
  {
    id: 2,
    title: "Brand Story",
    description: "Tell your brand story with engaging visuals and animations",
    thumbnail: "/templates/brand-story.jpg",
  },
  {
    id: 3,
    title: "Social Media Ad",
    description: "Optimized for social media platforms with eye-catching effects",
    thumbnail: "/templates/social-media.jpg",
  },
  // Add more templates as needed
]

export default function TemplatesPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Templates</h1>
            <Button>Create New Template</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{template.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {template.description}
                  </p>
                  <Button variant="outline" className="w-full mt-4">
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 