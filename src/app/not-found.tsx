import Link from 'next/link'
import { company } from '@/content/company'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#B8860B] text-sm font-bold tracking-widest uppercase mb-4">404 — Page Not Found</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Oops.
        </h1>
        <p className="text-[#64748B] text-lg mb-10 leading-relaxed">
          The page you are looking for does not exist. It may have been moved or the link may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0F172A] text-white font-bold hover:bg-[#1e293b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#0F172A] text-[#0F172A] font-bold hover:bg-[#0F172A] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
          >
            Browse Products
          </Link>
        </div>
        <p className="mt-10 text-[#64748B] text-sm">{company.name} — Siliguri, West Bengal</p>
      </div>
    </div>
  )
}
