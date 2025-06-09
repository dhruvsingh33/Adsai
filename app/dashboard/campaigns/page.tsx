import { DashboardLayout } from "@/components/layout/DashboardLayout"

export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-gray-500">No campaigns yet. Create your first campaign to get started.</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 