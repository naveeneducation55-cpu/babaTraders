import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { company, whyChooseUs, statistics } from '@/content/company'
import { contact } from '@/content/contact'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ContactCTASection } from '@/components/sections/ContactCTASection'
import { siteConfig } from '@/content/site'
import { ShieldCheck, Package, MapPin, Star, Users, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About BABA TRADERS | Trusted Netting Supplier Since 2005',
  description: 'Learn about BABA TRADERS, a trusted importer, exporter, distributor and wholesaler of mosquito nets and agricultural nets serving India, Nepal and Bhutan since 2005.',
  alternates: { canonical: siteConfig.url + '/about' },
}

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  'package': Package,
  'map-pin': MapPin,
  'star': Star,
  'users': Users,
  'phone': Phone,
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About BABA TRADERS"
        description="Trusted importer, exporter, distributor and wholesaler of netting products since 2005."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Story Section */}
      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-[#B8860B] font-semibold text-sm tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-[#B8860B]" />
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Established in Siliguri, Trusted Across South Asia
              </h2>
              <div className="space-y-4 text-[#64748B] text-base leading-relaxed">
                <p>{company.description}</p>
                <p>
                  Strategically located in Siliguri, West Bengal — the commercial gateway to Northeast India, Nepal and Bhutan — we are uniquely positioned to serve businesses across the entire region with efficient and reliable supply.
                </p>
                <p>
                  Our product range spans mosquito net rolls, agricultural filter nets, insect protection nets and foldable readymade nets. We serve wholesalers, dealers, distributors and agricultural businesses who require consistent quality and dependable supply.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {company.businessTypes.map((type) => (
                  <Badge key={type} variant="gold">{type}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {statistics.map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-[#E5E7EB] text-center">
                    <p className="text-4xl font-extrabold text-[#0F172A] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {stat.value}
                    </p>
                    <p className="text-[#64748B] text-sm">{stat.label}</p>
                  </div>
                ))}
                <div className="bg-[#0F172A] rounded-2xl p-6 text-center col-span-2">
                  <p className="text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-1">Headquarters</p>
                  <p className="text-white font-semibold">{contact.address.city}, {contact.address.state}</p>
                  <p className="text-white/50 text-sm mt-1">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-[#B8860B] font-semibold text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-[#B8860B]" />
              Why Choose Us
              <span className="w-8 h-px bg-[#B8860B]" />
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Strengths
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] ?? ShieldCheck
              return (
                <div key={i} className="bg-[#F8F7F4] rounded-2xl p-7 border border-[#E5E7EB]">
                  <div className="w-11 h-11 rounded-xl bg-[#0F172A]/8 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#B8860B]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  )
}
