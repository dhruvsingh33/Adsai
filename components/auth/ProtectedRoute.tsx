import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return <>{children}</>
} 