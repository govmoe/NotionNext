/**
 * SteamHeader Component
 * 顶部导航栏组件
 */

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SteamHeader = ({ siteInfo, blogConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { label: 'Blog', href: '/', icon: '📰' },
    { label: 'Archive', href: '/archive', icon: '📚' },
    { label: 'Categories', href: '/categories', icon: '🏷️' },
    { label: 'Tags', href: '/tags', icon: '🔖' },
    { label: 'About', href: '/about', icon: 'ℹ️' },
  ]

  return (
    <header className='steam-header'>
      <div className='steam-header-logo'>
        <span className='text-2xl'>🎮</span>
        <span>{siteInfo?.title || 'Steam News'}</span>
      </div>

      {/* Desktop Navigation */}
      <nav className='steam-header-nav hidden md:flex'>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              className={lex items-center gap-1 transition-colors \}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-steam-accent text-2xl'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className='absolute top-full left-0 right-0 bg-steam-bg-secondary border-b border-steam-border md:hidden'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className='block px-4 py-3 text-steam-text hover:text-steam-accent hover:bg-steam-card-hover border-b border-steam-border last:border-b-0'>
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default SteamHeader
