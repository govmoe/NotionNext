import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import SmartLink from '@/components/SmartLink'

export default function ArticleInfo({ post }) {
  return (
    <div className='mb-8'>
      <h1 className='text-2xl font-bold text-[#cdd6f4] mb-4'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
        {post.title}
      </h1>

      <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#585b70] pb-4 border-b border-[#313244]'>
        <span>{post.date?.start_date || post.createdTime}</span>
        {post.category && (
          <SmartLink href={`/category/${post.category}`}>
            <span className='text-[#a6e3a1] hover:underline'>./{post.category}</span>
          </SmartLink>
        )}
        <TwikooCommentCount post={post} />
        {post?.tags?.map(t => (
          <SmartLink key={t} href={`/tag/${encodeURIComponent(t)}`}>
            <span className='text-[#585b70] hover:text-[#a6adc8]'>#{t}</span>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}
