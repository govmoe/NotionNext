/**
 * Steam Theme - Main Entry Point
 * 主题入口文件，导出所有布局
 */

import React, { useEffect, useState } from 'react'
import SteamHeader from './components/SteamHeader'
import SteamSidebar from './components/SteamSidebar'
import SteamFooter from './components/SteamFooter'
import SteamHero from './components/SteamHero'
import SteamPostCard from './components/SteamPostCard'
import SteamBackToTop from './components/SteamBackToTop'
import steamStyles from './style'
import steamConfig from './config'

/**
 * LayoutBase - 基础布局框架
 * 所有页面的父布局，定义整体结构
 */
const LayoutBase = ({ children, siteInfo, blogConfig, posts = [] }) => {
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    // 提取所有分类
    const allCategories = new Set()
    posts.forEach((post) => {
      if (post.category) allCategories.add(post.category)
      if (post.categories) post.categories.forEach((cat) => allCategories.add(cat))
    })
    setCategories(Array.from(allCategories))

    // 提取所有标签
    const allTags = new Set()
    posts.forEach((post) => {
      if (post.tags) post.tags.forEach((tag) => allTags.add(tag))
    })
    setTags(Array.from(allTags))
  }, [posts])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: steamStyles }} />
      <div className='steam-container'>
        {/* Header */}
        <SteamHeader siteInfo={siteInfo} blogConfig={blogConfig} />

        {/* Main Layout */}
        <div className='w-full flex'>
          {/* Sidebar */}
          <SteamSidebar categories={categories} tags={tags} />

          {/* Main Content */}
          <div className='steam-main'>
            <div className='steam-content'>
              {children}
            </div>
            <SteamFooter siteInfo={siteInfo} blogConfig={blogConfig} />
          </div>
        </div>

        {/* Back to Top Button */}
        <SteamBackToTop showBelow={steamConfig.components.backToTop.showBelow} />
      </div>
    </>
  )
}

/**
 * LayoutIndex - 首页布局
 * 显示特色文章和文章网格
 */
const LayoutIndex = ({ posts, siteInfo, blogConfig }) => {
  const featuredPost = posts && posts.length > 0 ? posts[0] : null
  const otherPosts = posts && posts.length > 1 ? posts.slice(1) : []

  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      {/* Hero Section */}
      {featuredPost && steamConfig.components.hero.enabled && (
        <SteamHero post={featuredPost} />
      )}

      {/* Posts Grid */}
      <div className='steam-post-grid'>
        {otherPosts.map((post) => (
          <SteamPostCard key={post.id || post.slug} post={post} />
        ))}
      </div>

      {/* Empty State */}
      {(!posts || posts.length === 0) && (
        <div className='text-center py-20'>
          <p className='text-steam-text-muted text-lg'>No posts found</p>
        </div>
      )}
    </LayoutBase>
  )
}

/**
 * LayoutSlug - 文章详情页布局
 * 显示完整文章内容
 */
const LayoutSlug = ({ post, siteInfo, blogConfig, posts = [] }) => {
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      {post ? (
        <article className='steam-article'>
          {/* Article Header */}
          <div className='steam-article-header'>
            {post.category && (
              <div className='steam-post-category mb-4'>
                {post.category}
              </div>
            )}
            <h1 className='steam-article-title'>{post.title}</h1>
            <div className='steam-article-meta'>
              {post.author && (
                <span>
                  <strong>By</strong> {post.author}
                </span>
              )}
              {post.date && (
                <span>
                  <strong>Published</strong> {formatDate(post.date)}
                </span>
              )}
              {post.tags && post.tags.length > 0 && (
                <span>
                  <strong>Tags:</strong> {post.tags.join(', ')}
                </span>
              )}
            </div>
          </div>

          {/* Article Body */}
          <div className='steam-article-body'>
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>{post.summary || 'No content available'}</p>
            )}
          </div>
        </article>
      ) : (
        <div className='text-center py-20'>
          <p className='text-steam-text-muted text-lg'>Post not found</p>
        </div>
      )}
    </LayoutBase>
  )
}

/**
 * LayoutPostList - 文章列表布局
 * 用于首页、搜索页、分类页、标签页
 */
const LayoutPostList = ({ posts, siteInfo, blogConfig, title = 'Posts' }) => {
  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      {title && (
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-steam-text-light'>{title}</h1>
          <p className='text-steam-text-muted mt-2'>
            {posts?.length || 0} posts found
          </p>
        </div>
      )}

      <div className='steam-post-grid'>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <SteamPostCard key={post.id || post.slug} post={post} />
          ))
        ) : (
          <div className='col-span-full text-center py-20'>
            <p className='text-steam-text-muted text-lg'>No posts found</p>
          </div>
        )}
      </div>
    </LayoutBase>
  )
}

/**
 * LayoutSearch - 搜索页布局
 */
const LayoutSearch = ({ posts, siteInfo, blogConfig, keyword = '' }) => {
  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      <div className='steam-search-container'>
        <h1 className='text-3xl font-bold text-steam-text-light mb-4'>
          Search Results
        </h1>
        {keyword && (
          <p className='text-steam-text-muted'>
            Results for: <strong>{keyword}</strong>
          </p>
        )}
      </div>

      <div className='steam-post-grid'>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <SteamPostCard key={post.id || post.slug} post={post} />
          ))
        ) : (
          <div className='col-span-full text-center py-20'>
            <p className='text-steam-text-muted text-lg'>
              No posts found matching your search
            </p>
          </div>
        )}
      </div>
    </LayoutBase>
  )
}

/**
 * LayoutArchive - 归档页布局
 */
const LayoutArchive = ({ posts, siteInfo, blogConfig }) => {
  const groupedByYear = {}

  posts?.forEach((post) => {
    const year = new Date(post.date).getFullYear()
    if (!groupedByYear[year]) {
      groupedByYear[year] = []
    }
    groupedByYear[year].push(post)
  })

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a)

  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      <h1 className='text-3xl font-bold text-steam-text-light mb-8'>Archive</h1>

      {sortedYears.length > 0 ? (
        sortedYears.map((year) => (
          <div key={year} className='mb-12'>
            <h2 className='text-2xl font-bold text-steam-accent mb-6'>
              {year}
            </h2>
            <div className='steam-post-grid'>
              {groupedByYear[year].map((post) => (
                <SteamPostCard key={post.id || post.slug} post={post} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-20'>
          <p className='text-steam-text-muted text-lg'>No posts in archive</p>
        </div>
      )}
    </LayoutBase>
  )
}

/**
 * LayoutCategoryIndex - 分类列表页布局
 */
const LayoutCategoryIndex = ({ categories, siteInfo, blogConfig, posts = [] }) => {
  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      <h1 className='text-3xl font-bold text-steam-text-light mb-8'>Categories</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categories && categories.length > 0 ? (
          categories.map((category) => {
            const categoryPosts = posts.filter(
              (post) =>
                post.category === category ||
                (post.categories && post.categories.includes(category))
            )
            return (
              <div
                key={category}
                className='steam-post-card p-6 flex flex-col justify-between'
              >
                <div>
                  <h3 className='text-xl font-bold text-steam-text-light mb-2'>
                    {category}
                  </h3>
                  <p className='text-steam-text-muted'>
                    {categoryPosts.length} posts
                  </p>
                </div>
                <a
                  href={/category/\}
                  className='steam-post-read-more mt-4'
                >
                  View Category →
                </a>
              </div>
            )
          })
        ) : (
          <div className='col-span-full text-center py-20'>
            <p className='text-steam-text-muted text-lg'>No categories found</p>
          </div>
        )}
      </div>
    </LayoutBase>
  )
}

/**
 * LayoutTagIndex - 标签列表页布局
 */
const LayoutTagIndex = ({ tags, siteInfo, blogConfig, posts = [] }) => {
  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      <h1 className='text-3xl font-bold text-steam-text-light mb-8'>Tags</h1>

      <div className='flex flex-wrap gap-4'>
        {tags && tags.length > 0 ? (
          tags.map((tag) => {
            const tagPosts = posts.filter(
              (post) => post.tags && post.tags.includes(tag)
            )
            return (
              <a
                key={tag}
                href={/tag/\}
                className='steam-post-tag px-4 py-2 hover:border-steam-accent hover:text-steam-accent transition-colors cursor-pointer'
              >
                {tag} ({tagPosts.length})
              </a>
            )
          })
        ) : (
          <p className='text-steam-text-muted'>No tags found</p>
        )}
      </div>
    </LayoutBase>
  )
}

/**
 * Layout404 - 404错误页布局
 */
const Layout404 = ({ siteInfo, blogConfig, posts = [] }) => {
  return (
    <LayoutBase siteInfo={siteInfo} blogConfig={blogConfig} posts={posts}>
      <div className='text-center py-32'>
        <h1 className='text-6xl font-bold text-steam-accent mb-4'>404</h1>
        <h2 className='text-3xl font-bold text-steam-text-light mb-4'>
          Page Not Found
        </h2>
        <p className='text-steam-text-muted mb-8'>
          Sorry, the page you are looking for does not exist.
        </p>
        <a href='/' className='steam-btn steam-btn-primary'>
          Back to Home
        </a>
      </div>
    </LayoutBase>
  )
}

// Export all layouts
export {
  LayoutBase,
  LayoutIndex,
  LayoutSlug,
  LayoutPostList,
  LayoutSearch,
  LayoutArchive,
  LayoutCategoryIndex,
  LayoutTagIndex,
  Layout404,
}

export default LayoutIndex
