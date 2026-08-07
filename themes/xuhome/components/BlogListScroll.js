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
    <div ref={targetRef}>
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}
      <div onClick={handleGetMore} className='text-center py-6'>
        <span className='inline-block border-2 border-[#0f172a] rounded-sm shadow-[2px_2px_0px_0px_#0f172a] bg-[#ffffff] dark:bg-slate-800 px-6 py-2 font-black text-sm text-[#0f172a] uppercase tracking-wider hover:bg-[#1e293b] hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer select-none'>
          {hasMore ? 'Load more' : 'No more'}
        </span>
      </div>
    </div>
  )
}
