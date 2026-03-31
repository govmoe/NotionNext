/**
 * SteamPostCard Component
 * 文章卡片组件
 */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SteamPostCard = ({ post, showThumbnail = true }) => {
  if (!post) return null

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const truncateText = (text, length = 120) => {
    if (!text) return ''
    return text.length > length ? text.substring(0, length) + '...' : text
  }

  const getCategory = (post) => {
    if (post.category) return post.category
    if (post.categories && post.categories.length > 0) return post.categories[0]
    return 'News'
  }

  const getThumbnail = (post) => {
    if (post.image) return post.image
    if (post.cover) return post.cover
    if (post.thumbnail) return post.thumbnail
    return '/images/default-thumbnail.jpg'
  }

  return (
    <Link href={/\}>
      <a className='steam-post-card group'>
        {/* Thumbnail */}
        {showThumbnail && (
          <div className='relative w-full h-48 bg-steam-bg-secondary overflow-hidden'>
            <img
              src={getThumbnail(post)}
              alt={post.title}
              className='steam-post-thumbnail group-hover:scale-105 transition-transform duration-300'
              onError={(e) => {
                e.target.src = '/images/default-thumbnail.jpg'
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className='steam-post-content'>
          {/* Category Badge */}
          <div className='steam-post-category'>
            {getCategory(post)}
          </div>

          {/* Title */}
          <h3 className='steam-post-title'>
            {post.title}
          </h3>

          {/* Meta Information */}
          <div className='steam-post-meta'>
            {post.author && (
              <div className='steam-post-author'>
                <span>✍️</span>
                <span>{post.author}</span>
              </div>
            )}
            {post.date && (
              <div className='steam-post-date'>
                <span>📅</span>
                <span>{formatDate(post.date)}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          <p className='steam-post-excerpt'>
            {truncateText(post.summary || post.excerpt || post.description)}
          </p>

          {/* Footer with Tags and Read More */}
          <div className='steam-post-footer'>
            <div className='steam-post-tags'>
              {post.tags && post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className='steam-post-tag'>
                  {tag}
                </span>
              ))}
            </div>
            <span className='steam-post-read-more'>
              Read More →
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SteamPostCard
