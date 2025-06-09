import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Settings</h1>

          <div className="space-y-6">
            {/* Account Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Account Settings</h2>
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive email updates about your account
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new features and offers
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            {/* Video Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Video Settings</h2>
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-save Drafts</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save your video drafts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>High Quality Preview</Label>
                    <p className="text-sm text-muted-foreground">
                      Show high quality previews in the editor
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-destructive">Danger Zone</h2>
              <div className="rounded-lg border border-destructive/50 bg-card p-6">
                <div className="space-y-4">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Delete Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 