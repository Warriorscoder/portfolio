import Sidebar from "@/components/Sidebar"
import "./globals.css"

export const metadata = {
  title: "Portfolio",
  description: "Designer portfolio"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <aside className="w-64 p-6 border-r hidden md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  )
}
