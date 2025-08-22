import type { Metadata } from "next"
import WorkPageClient from "./WorkPageClient"

export const metadata: Metadata = {
  title: "Work",
  description: "My projects",
}

export default function WorkPage() {
  return <WorkPageClient />
}
