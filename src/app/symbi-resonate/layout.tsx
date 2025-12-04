import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYMBI Resonate Demo',
  description: 'Professional SYMBI Resonate demo experience with sophisticated frontend components and enterprise-grade analytics',
  openGraph: {
    title: 'SYMBI Resonate Demo',
    description: 'Experience the sophisticated SYMBI Resonate platform with advanced AI analytics and enterprise-grade components',
    type: 'website',
  },
}

export default function SymbiResonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}