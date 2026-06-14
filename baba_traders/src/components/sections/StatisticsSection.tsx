'use client'

import { useEffect, useRef, useState } from 'react'
import { statistics } from '@/content/company'
import { tokens } from '@/styles/tokens'

function CountUp({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 2200
    const startTime = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, start])

  return <>{count}</>
}

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const num = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
      <p
        style={{
          fontFamily: tokens.font.heading,
          fontWeight: tokens.fontWeight.black,
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          color: tokens.color.primary,
          lineHeight: tokens.lineHeight.none,
          letterSpacing: tokens.letterSpacing.tighter,
        }}
        aria-label={`${value} ${label}`}
      >
        <CountUp target={num} start={started} />{suffix}
      </p>
      <p style={{
        fontFamily: tokens.font.body,
        fontWeight: tokens.fontWeight.medium,
        fontSize: tokens.fontSize.tiny,
        color: tokens.color.textSecondary,
        marginTop: '0.625rem',
        letterSpacing: tokens.letterSpacing.wider,
        textTransform: 'uppercase' as const,
      }}>
        {label}
      </p>
    </div>
  )
}

export function StatisticsSection() {
  return (
    <section id="stats" style={{ backgroundColor: tokens.color.background, padding: '2rem 0' }}>
      <div className="container-xl">
        <div style={{
          backgroundColor: tokens.color.surface,
          borderRadius: tokens.radius.cardLg,
          border: `1px solid ${tokens.color.border}`,
          boxShadow: tokens.shadow.card,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Gold top accent */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${tokens.color.accent}, transparent)`,
          }} />

          {statistics.map((stat, i) => (
            <div key={i} style={{
              borderRight: i < statistics.length - 1 ? `1px solid ${tokens.color.border}` : 'none',
            }}>
              <StatCard value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}