import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import BlogItem from './BlogItem'

export default function BlogListPage(props) {
  const { page = 1, posts, postCount } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const router = useRouter()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const currentPage = +page
  const showPrev = currentPage > 1
  const showNext = page < totalPage
  const pagePrefix = router.asPath.split('?')[0].replace(/\/page\/[1-9]\d*/, '').replace(/\/$/, '')

  return (
    <div id='posts-wrapper'>
      <div className='text-xs text-[#585b70] flex items-center gap-4 pb-2 border-b border-[#313244] mb-2'>
        <span className='md:w-24'>date</span>
        <span>title</span>
      </div>

      {posts?.map(post => (
        <BlogItem key={post.id} post={post} />
      ))}

      <div className='flex justify-between items-center text-xs mt-6'>
        <SmartLink
          href={{ pathname: currentPage - 1 === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${currentPage - 1}`, query: router.query.s ? { s: router.query.s } : {} }}
          className={`${showPrev
            ? 'text-[#a6adc8] hover:text-[#89b4fa] hover:underline'
            : 'text-[#313244] pointer-events-none'
          }`}>
          {'<< prev'}
        </SmartLink>
        <span className='text-[#585b70]'>
          {currentPage}/{totalPage || 1}
        </span>
        <SmartLink
          href={{ pathname: `${pagePrefix}/page/${currentPage + 1}`, query: router.query.s ? { s: router.query.s } : {} }}
          className={`${showNext
            ? 'text-[#a6adc8] hover:text-[#89b4fa] hover:underline'
            : 'text-[#313244] pointer-events-none'
          }`}>
          {'next >>'}
        </SmartLink>
      </div>
    </div>
  )
}
