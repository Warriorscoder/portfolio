import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Aniket Anand Bharane | Senior Product Engineer & Frontend Architect",
  description: "Specialized in Next.js, TypeScript, API-driven architectures, dashboard systems, and performance-optimized SaaS platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen bg-[#F7F6F3] text-[#2F3437] antialiased">
        <div className="relative flex min-h-screen w-full">
          {/* Sidebar handles its own responsiveness */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 md:ml-64 p-4 md:p-8 lg:p-12 overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
