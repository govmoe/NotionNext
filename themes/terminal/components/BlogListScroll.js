import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import BlogItem from './BlogItem'

export default function BlogListScroll(props) {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)

  let hasMore = false
  const postsToShow = posts ? Object.assign(posts).slice(0, POSTS_PER_PAGE * page) : []

  if (posts) {
    hasMore = page * POSTS_PER_PAGE < posts.length
  }

  const handleGetMore = () => { if (!hasMore) return; updatePage(page + 1) }
  const targetRef = useRef(null)

  const scrollTrigger = useCallback(throttle(() => {
    const scrollS = window.scrollY + window.outerHeight
    const clientHeight = targetRef?.current?.clientHeight || 0
    if (scrollS > clientHeight + 100) handleGetMore()
  }, 500))

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger, { passive: true })
    return () => window.removeEventListener('scroll', scrollTrigger)
  })

  return (
    <div id='posts-wrapper' ref={targetRef}>
      <div className='text-xs text-[#585b70] flex items-center gap-4 pb-2 border-b border-[#313244] mb-2'>
        <span className='md:w-24'>date</span>
        <span>title</span>
      </div>
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}
      <div onClick={handleGetMore} className='text-center py-6 cursor-pointer text-xs text-[#585b70] hover:text-[#a6adc8]'>
        {hasMore ? 'more...' : 'EOF'}
      </div>
    </div>
  )
}
