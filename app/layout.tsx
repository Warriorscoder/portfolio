import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Designer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <div className="relative flex min-h-screen">
          {/* Sidebar handles its own responsiveness */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
