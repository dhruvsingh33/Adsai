import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Play, Download } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

export default function WorkspacePage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Workspace</h1>
            <Button className="gap-2">
              <Sparkles className="w-4 h-4" />
              Generate Video
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Video Description</h2>
                <Textarea
                  placeholder="Describe your video ad in detail..."
                  className="min-h-[200px]"
                />
                <div className="mt-4 flex gap-4">
                  <Button variant="outline" className="gap-2">
                    <Play className="w-4 h-4" />
                    Preview
                  </Button>
                  <Button className="gap-2">
                    <Sparkles className="w-4 h-4" />
                    Generate
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Your video preview will appear here
                  </p>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 