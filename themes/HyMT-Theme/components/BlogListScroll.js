import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BlogItem } from './BlogItem'

export default function BlogListScroll(props) {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  let hasMore = false
  const postsToShow = posts ? Object.assign(posts).slice(0, POSTS_PER_PAGE * page) : []

  if (posts) {
    const totalCount = posts.length
    hasMore = page * POSTS_PER_PAGE < totalCount
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
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}
      <div onClick={handleGetMore} className='w-full my-6 py-4 text-center cursor-pointer'>
        {hasMore ? (
          <span className='inline-block px-8 py-2.5 rounded-sm text-xs uppercase tracking-wider bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-[#c6d4df] hover:from-white/[0.14] hover:to-white/[0.05] hover:text-white transition-all border border-[#373c44]/50'>
            {locale.COMMON.MORE}
          </span>
        ) : (
          <span className='text-xs text-[#61686d] uppercase tracking-wider'>{locale.COMMON.NO_MORE}</span>
        )}
      </div>
    </div>
  )
}
