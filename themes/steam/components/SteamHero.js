/**
 * SteamHero Component
 * 英雄区域组件 - 首页特色文章展示
 */

import React from 'react'
import Link from 'next/link'

const SteamHero = ({ post }) => {
  if (!post) return null

  const getThumbnail = (post) => {
    if (post.image) return post.image
    if (post.cover) return post.cover
    if (post.thumbnail) return post.thumbnail
    return '/images/default-hero.jpg'
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const getCategory = (post) => {
    if (post.category) return post.category
    if (post.categories && post.categories.length > 0) return post.categories[0]
    return 'Featured'
  }

  return (
    <Link href={/\}>
      <a className='steam-hero group'>
        {/* Background Image */}
        <img
          src={getThumbnail(post)}
          alt={post.title}
          className='steam-hero-image group-hover:scale-105 transition-transform duration-500'
          onError={(e) => {
            e.target.src = '/images/default-hero.jpg'
          }}
        />

        {/* Overlay Gradient */}
        <div className='steam-hero-overlay'></div>

        {/* Content */}
        <div className='steam-hero-content'>
          <div className='inline-block steam-post-category mb-4'>
            {getCategory(post)}
          </div>

          <h2 className='steam-hero-title'>
            {post.title}
          </h2>

          <p className='steam-hero-subtitle'>
            {post.author && <span>By {post.author}</span>}
            {post.author && post.date && <span> • </span>}
            {post.date && <span>{formatDate(post.date)}</span>}
          </p>

          {post.summary && (
            <p className='mt-3 text-steam-text-muted line-clamp-2'>
              {post.summary}
            </p>
          )}

          <div className='mt-4 inline-flex items-center gap-2 text-steam-accent group-hover:text-steam-accent-hover transition-colors'>
            <span>Explore Featured Story</span>
            <span>→</span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SteamHero
