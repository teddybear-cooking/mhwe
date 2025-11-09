import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "Clean, reactive UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen">
          <aside className="hidden lg:block bg-black p-6">
            <div className="sticky top-6">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h1 className="text-2xl font-bold text-black mb-1">Finance</h1>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <Sidebar />
              </div>
            </div>
          </aside>
          <main className="min-h-screen p-6 md:p-8 max-w-[1600px] mx-auto w-full bg-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
