/**
 * SteamSidebar Component
 * 左侧导航栏组件
 */

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SteamSidebar = ({ categories, tags }) => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()

  const sidebarItems = [
    { name: 'All News', href: '/', icon: '📰' },
    { name: 'Game Updates', href: '/category/game-updates', icon: '🎮' },
    { name: 'Announcements', href: '/category/announcements', icon: '📢' },
    { name: 'Trending', href: '/trending', icon: '🔥' },
    { name: 'Your Tags', href: '/tags', icon: '🏷️' },
  ]

  if (collapsed) {
    return (
      <div className='steam-sidebar w-16 flex flex-col items-center pt-4'>
        <button
          onClick={() => setCollapsed(false)}
          className='text-steam-accent hover:text-steam-accent-hover mb-6'
          title='Expand sidebar'
        >
          ▶
        </button>
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              className='text-2xl mb-4 hover:text-steam-accent transition-colors'
              title={item.name}
            >
              {item.icon}
            </a>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <aside className='steam-sidebar'>
      <div className='steam-sidebar-section'>
        <div className='flex justify-between items-center mb-4 px-4'>
          <h3 className='steam-sidebar-title'>News</h3>
          <button
            onClick={() => setCollapsed(true)}
            className='text-steam-text-muted hover:text-steam-accent text-sm'
            title='Collapse sidebar'
          >
            ◀
          </button>
        </div>

        <ul className='steam-sidebar-list'>
          {sidebarItems.map((item) => (
            <li key={item.href} className='steam-sidebar-item'>
              <Link href={item.href}>
                <a
                  className={steam-sidebar-link \}
                >
                  <span className='text-lg'>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Section */}
      {categories && categories.length > 0 && (
        <div className='steam-sidebar-section'>
          <h4 className='steam-sidebar-title'>Categories</h4>
          <ul className='steam-sidebar-list'>
            {categories.slice(0, 8).map((category) => (
              <li key={category} className='steam-sidebar-item'>
                <Link href={/category/\}>
                  <a className='steam-sidebar-link'>
                    <span className='text-lg'>📁</span>
                    <span className='truncate'>{category}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <div className='steam-sidebar-section'>
          <h4 className='steam-sidebar-title'>Popular Tags</h4>
          <div className='flex flex-wrap gap-2 px-4'>
            {tags.slice(0, 10).map((tag) => (
              <Link key={tag} href={/tag/\}>
                <a className='steam-post-tag hover:border-steam-accent hover:text-steam-accent transition-colors'>
                  {tag}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}

export default SteamSidebar
