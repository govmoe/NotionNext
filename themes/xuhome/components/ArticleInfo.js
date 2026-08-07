import NotionIcon from '@/components/NotionIcon'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

export default function ArticleInfo({ post }) {
  return (
    <div>
      <h1 className='text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4 leading-tight'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
        {post.title}
      </h1>

      <div className='flex flex-wrap items-center gap-2 pb-4 mb-6 border-b-[3px] border-[#1e3a8a]'>
        <span className='text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono'>
          {post.date?.start_date || post.createdTime}
        </span>
        {post.category && (
          <SmartLink href={`/category/${post.category}`}>
            <span className='inline-block border-2 border-[#1e3a8a] rounded-sm shadow-[1px_1px_0px_0px_#1e3a8a] px-2 py-0.5 text-xs font-black uppercase tracking-wider text-[#1e3a8a] bg-[#fde68a] hover:bg-[#1e3a8a] hover:text-white transition-colors'>
              {post.category}
            </span>
          </SmartLink>
        )}
        <TwikooCommentCount post={post} className='text-xs font-black text-slate-400 dark:text-slate-500 uppercase' />
        {post?.tags?.map(t => (
          <SmartLink key={t} href={`/tag/${encodeURIComponent(t)}`}>
            <span className='text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider hover:text-[#1e3a8a] transition-colors'>
              #{t}
            </span>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}
