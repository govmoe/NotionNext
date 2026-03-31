/**
 * SteamFooter Component
 * 页脚组件
 */

import React from 'react'
import Link from 'next/link'

const SteamFooter = ({ siteInfo, blogConfig }) => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Archive', href: '/archive' },
    { label: 'Categories', href: '/categories' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' },
  ]

  return (
    <footer className='steam-footer'>
      <div className='steam-footer-content'>
        {/* Footer Links */}
        <div className='steam-footer-links'>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className='hover:text-steam-accent transition-colors'>
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className='mb-3'>
          <p>
            © {currentYear} {siteInfo?.title || 'Steam News'}. All rights reserved.
          </p>
        </div>

        {/* Attribution */}
        <div className='text-xs text-steam-text-muted'>
          <p>
            Powered by{' '}
            <a
              href='https://github.com/tangly1024/NotionNext'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-steam-accent transition-colors'
            >
              NotionNext
            </a>
            {' '}with Steam Theme
          </p>
        </div>

        {/* Social Links (Optional) */}
        {blogConfig?.socialLinks && blogConfig.socialLinks.length > 0 && (
          <div className='mt-4 flex justify-center gap-4'>
            {blogConfig.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-steam-text-muted hover:text-steam-accent transition-colors'
                title={social.name}
              >
                {social.icon || social.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}

export default SteamFooter
