import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import { BlogItem } from './BlogItem'

export default function BlogListPage(props) {
  const { page = 1, posts, postCount } = props
  const router = useRouter()
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const currentPage = +page
  const showPrev = currentPage > 1
  const showNext = page < totalPage
  const pagePrefix = router.asPath.split('?')[0].replace(/\/page\/[1-9]\d*/, '').replace(/\/$/, '').replace('.html', '')

  return (
    <div id='posts-wrapper'>
      {posts?.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}

      <div className='flex justify-between items-center mt-6 pt-4 border-t border-[#373c44]'>
        <SmartLink
          href={{ pathname: currentPage - 1 === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${currentPage - 1}`, query: router.query.s ? { s: router.query.s } : {} }}
          className={`inline-block px-6 py-2 rounded-sm text-xs uppercase tracking-wider transition-colors ${
            showPrev ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-[#c6d4df] hover:text-white border border-[#373c44]/50' : 'invisible pointer-events-none'
          }`}>
          NEWER
        </SmartLink>
        <span className='text-xs text-[#61686d]'>{currentPage} / {totalPage || 1}</span>
        <SmartLink
          href={{ pathname: `${pagePrefix}/page/${currentPage + 1}`, query: router.query.s ? { s: router.query.s } : {} }}
          className={`inline-block px-6 py-2 rounded-sm text-xs uppercase tracking-wider transition-colors ${
            showNext ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-[#c6d4df] hover:text-white border border-[#373c44]/50' : 'invisible pointer-events-none'
          }`}>
          OLDER
        </SmartLink>
      </div>
    </div>
  )
}
