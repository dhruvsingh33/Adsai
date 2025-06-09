import { DashboardLayout } from "@/components/layout/DashboardLayout"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-gray-500">Account settings and preferences will appear here.</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 