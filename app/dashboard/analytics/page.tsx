import { DashboardLayout } from "@/components/layout/DashboardLayout"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <p className="text-gray-500">Analytics data will appear here once you have active campaigns.</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 