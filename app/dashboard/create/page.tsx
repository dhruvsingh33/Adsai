import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Upload,
  Image as ImageIcon,
  Video as VideoIcon,
  Settings,
  CheckCircle
} from "lucide-react"

export default function CreateAdPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Create New Ad</h1>
        
        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-between">
          {[
            { icon: Upload, label: "Upload" },
            { icon: ImageIcon, label: "Content" },
            { icon: VideoIcon, label: "Generate" },
            { icon: Settings, label: "Settings" },
            { icon: CheckCircle, label: "Review" },
          ].map((step, index) => (
            <div key={step.label} className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-600 bg-white">
                <step.icon className="h-5 w-5 text-purple-600" />
              </div>
              <span className="mt-2 text-sm font-medium">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Ad Title</Label>
              <Input
                id="title"
                placeholder="Enter a title for your ad"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your ad content"
                className="mt-1"
              />
            </div>

            <div>
              <Label>Upload Media</Label>
              <div className="mt-1 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <Button variant="outline">Upload Files</Button>
                    <p className="mt-2 text-sm text-gray-500">
                      or drag and drop your files here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Save Draft</Button>
              <Button>Continue to Content</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 