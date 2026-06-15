import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { company } from '@/content/company'
import { contact, phoneUrl, whatsappUrl, phoneDisplay } from '@/content/contact'
import { footerLinks } from '@/content/navigation'
import { tokens } from '@/styles/tokens'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: tokens.color.footer, color: tokens.color.textInverse }}>
      <div className="container-xl" style={{ paddingTop: '4rem', paddingBottom: 0 }}>
        <div className="footer-grid" style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Brand */}
          <div>
            <p style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.black,
              fontSize: '1.25rem',
              letterSpacing: '0.18em',
              color: tokens.color.textInverse,
              marginBottom: '0.25rem',
            }}>
              {company.name}
            </p>
            <p style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.semibold,
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              color: tokens.color.accent,
              marginBottom: '1.25rem',
              textTransform: 'uppercase' as const,
            }}>
              Est. {company.established}
            </p>
            <p style={{
              fontFamily: tokens.font.body,
              fontSize: tokens.fontSize.caption,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: tokens.lineHeight.loose,
              marginBottom: '1.5rem',
              maxWidth: '240px',
            }}>
              Trusted importer, exporter, distributor and wholesaler of netting products since 2005.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {company.businessTypes.map((t) => (
                <span key={t} style={{
                  padding: '0.25rem 0.625rem',
                  borderRadius: tokens.radius.pill,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: tokens.fontSize.tiny,
                  fontFamily: tokens.font.body,
                  letterSpacing: tokens.letterSpacing.wide,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.bold,
              fontSize: tokens.fontSize.eyebrow,
              letterSpacing: tokens.letterSpacing.eyebrow,
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase' as const,
              marginBottom: '1.25rem',
            }}>
              Quick Links
            </p>
            {footerLinks.pages.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="no-underline"
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: tokens.font.body,
                  fontSize: tokens.fontSize.bodySm,
                  fontWeight: tokens.fontWeight.medium,
                  marginBottom: '0.875rem',
                  transition: tokens.transition.fast,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Products */}
          <div>
            <p style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.bold,
              fontSize: tokens.fontSize.eyebrow,
              letterSpacing: tokens.letterSpacing.eyebrow,
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase' as const,
              marginBottom: '1.25rem',
            }}>
              Products
            </p>
            {footerLinks.categories.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="no-underline"
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: tokens.font.body,
                  fontSize: tokens.fontSize.caption,
                  fontWeight: tokens.fontWeight.medium,
                  marginBottom: '0.875rem',
                  transition: tokens.transition.fast,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: tokens.font.heading,
              fontWeight: tokens.fontWeight.bold,
              fontSize: tokens.fontSize.eyebrow,
              letterSpacing: tokens.letterSpacing.eyebrow,
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase' as const,
              marginBottom: '1.25rem',
            }}>
              Contact
            </p>

            <a
              href={phoneUrl}
              aria-label={`Call us at ${phoneDisplay}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <Phone size={16} color={tokens.color.accent} />
              <strong style={{
                color: tokens.color.textInverse,
                fontFamily: tokens.font.body,
                fontSize: '1rem',
                fontWeight: tokens.fontWeight.bold,
                letterSpacing: tokens.letterSpacing.wide,
              }}>
                {phoneDisplay}
              </strong>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <MessageCircle size={16} color={tokens.color.whatsapp} />
              <strong style={{
                color: tokens.color.textInverse,
                fontFamily: tokens.font.body,
                fontSize: '0.95rem',
                fontWeight: tokens.fontWeight.bold,
              }}>
                WhatsApp Us
              </strong>
            </a>

            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <MapPin size={16} color={tokens.color.accent} style={{ marginTop: '3px', flexShrink: 0 }} />
              <address style={{
                fontStyle: 'normal',
                fontFamily: tokens.font.body,
                fontSize: tokens.fontSize.caption,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: tokens.lineHeight.relaxed,
              }}>
                {contact.address.street}, {contact.address.ward},<br />
                {contact.address.area}, {contact.address.city},<br />
                {contact.address.state} {contact.address.pincode}
              </address>
            </div>

            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
            }}>
              <Clock size={16} color={tokens.color.accent} style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{
                fontFamily: tokens.font.body,
                fontSize: tokens.fontSize.caption,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: tokens.lineHeight.normal,
              }}>
                <p style={{ fontWeight: tokens.fontWeight.medium }}>{contact.hours.days}</p>
                <p>{contact.hours.open} – {contact.hours.close}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.5rem 0',
        }}>
          <p style={{
            fontFamily: tokens.font.body,
            fontSize: tokens.fontSize.tiny,
            color: 'rgba(255,255,255,0.25)',
          }}>
            © {year} {company.name}. All rights reserved.
          </p>
          <p style={{
            fontFamily: tokens.font.body,
            fontSize: tokens.fontSize.tiny,
            color: 'rgba(255,255,255,0.2)',
          }}>
            Siliguri, West Bengal, India
          </p>
        </div>
      </div>
    </footer>
  )
}