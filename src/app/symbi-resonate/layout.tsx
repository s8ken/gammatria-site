"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, BarChart3, Beaker, ArrowLeft } from "lucide-react";

export default function SymbiResonateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SYMBI Resonate</span>
            </div>
            <nav className="flex items-center gap-2 flex-wrap">
              <Link
                href="/symbi-resonate"
                className={`px-3 py-2 rounded ${isActive("/symbi-resonate") ? "bg-blue-100 text-blue-800" : "text-gray-900 hover:bg-gray-100"}`}
              >
                Overview
              </Link>
              <Link
                href="/symbi-resonate/dashboard"
                className={`px-3 py-2 rounded ${isActive("/symbi-resonate/dashboard") ? "bg-blue-100 text-blue-800" : "text-gray-900 hover:bg-gray-100"}`}
              >
                <span className="inline-flex items-center gap-2"><BarChart3 className="h-4 w-4" />Dashboard</span>
              </Link>
              <Link
                href="/symbi-resonate/experiments"
                className={`px-3 py-2 rounded ${isActive("/symbi-resonate/experiments") ? "bg-blue-100 text-blue-800" : "text-gray-900 hover:bg-gray-100"}`}
              >
                <span className="inline-flex items-center gap-2"><Beaker className="h-4 w-4" />Experiments</span>
              </Link>
              <Link
                href="/symbi-resonate/symbi"
                className={`px-3 py-2 rounded ${isActive("/symbi-resonate/symbi") ? "bg-blue-100 text-blue-800" : "text-gray-900 hover:bg-gray-100"}`}
              >
                <span className="inline-flex items-center gap-2"><Brain className="h-4 w-4" />SYMBI Test</span>
              </Link>
              <Link href="/" className="ml-4 px-3 py-2 rounded border text-gray-900"> 
                <span className="inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" />Back to App</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}