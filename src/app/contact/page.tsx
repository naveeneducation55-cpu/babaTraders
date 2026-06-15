import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { contact, phoneUrl, whatsappUrl, phoneDisplay, googleMapsUrl } from '@/content/contact'
import { company } from '@/content/company'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact BABA TRADERS | Siliguri, West Bengal',
  description: 'Contact BABA TRADERS for wholesale mosquito net and agricultural net enquiries. Call or WhatsApp us directly. Located in Siliguri, West Bengal.',
  alternates: { canonical: siteConfig.url + '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Reach us directly for wholesale pricing, product enquiries and bulk orders."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-[#F8F7F4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="inline-flex items-center gap-2 text-[#B8860B] font-semibold text-sm tracking-widest uppercase mb-3">
                  <span className="w-8 h-px bg-[#B8860B]" />
                  Get In Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  We are Here for You
                </h2>
                <p className="text-[#64748B] text-base leading-relaxed">
                  Contact {company.name} directly for all enquiries. We respond promptly via phone and WhatsApp during business hours.
                </p>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                <a
                  href={phoneUrl}
                  className="flex items-center gap-5 p-6 bg-[#0F172A] rounded-2xl hover:bg-[#1e293b] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                  aria-label={'Call us at ' + phoneDisplay}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-medium mb-1">Call Us</p>
                    <p className="text-white font-bold text-lg">{phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 bg-[#25D366] rounded-2xl hover:bg-[#22c55e] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                  aria-label="Contact us on WhatsApp"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs uppercase tracking-widest font-medium mb-1">WhatsApp</p>
                    <p className="text-white font-bold text-lg">{phoneDisplay}</p>
                  </div>
                </a>
              </div>

              {/* Address & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-[#B8860B]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#0F172A] text-sm">Address</h3>
                  </div>
                  <address className="not-italic text-[#64748B] text-sm leading-relaxed">
                    {contact.address.street},<br />
                    {contact.address.ward},<br />
                    {contact.address.area},<br />
                    {contact.address.city},<br />
                    {contact.address.state} {contact.address.pincode}
                  </address>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#B8860B] text-xs font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] rounded"
                    aria-label="View on Google Maps"
                  >
                    View on Maps →
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={18} className="text-[#B8860B]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#0F172A] text-sm">Business Hours</h3>
                  </div>
                  <p className="text-[#64748B] text-sm mb-1">{contact.hours.days}</p>
                  <p className="text-[#0F172A] font-semibold text-base">
                    {contact.hours.open} – {contact.hours.close}
                  </p>
                  <p className="text-[#64748B] text-xs mt-3">Closed on Sundays</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
                <div className="p-5 border-b border-[#E5E7EB]">
                  <h3 className="font-bold text-[#0F172A]">Find Us in Siliguri</h3>
                  <p className="text-[#64748B] text-sm mt-1">Ward 6, Mahananda Para, Siliguri</p>
                </div>
                <div className="aspect-video bg-[#0F172A]/5 flex items-center justify-center">
                  <div className="text-center px-6 py-10">
                    <MapPin size={32} className="text-[#B8860B] mx-auto mb-3" aria-hidden="true" />
                    <p className="text-[#0F172A] font-semibold mb-2">BABA TRADERS</p>
                    <p className="text-[#64748B] text-sm mb-4">41, BM Sarani Rd, Siliguri</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white text-sm font-semibold rounded-full hover:bg-[#1e293b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                      aria-label="Open location in Google Maps"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Info note */}
              <div className="bg-[#0F172A] rounded-2xl p-7">
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Wholesale Enquiries Welcome
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {company.name} specialises in bulk and wholesale supply. Dealers, distributors and agricultural businesses are encouraged to reach out directly for pricing and availability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {company.businessTypes.map((type) => (
                    <span key={type} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
