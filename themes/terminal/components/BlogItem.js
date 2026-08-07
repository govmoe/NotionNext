import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

export default function BlogItem({ post }) {
  const date = post.date?.start_date || post.createdTime

  return (
    <article className='py-4 border-b border-[#1e1e2e] hover:border-[#313244] transition-colors group'>
      <div className='flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4'>
        <span className='text-xs text-[#585b70] shrink-0 md:w-24 tabular-nums'>
          {date?.slice(0, 10) || ''}
        </span>

        <div className='flex-1 min-w-0'>
          <SmartLink href={post?.href} className='no-underline'>
            <h2 className='text-[#cdd6f4] group-hover:text-[#89b4fa] transition-colors font-bold truncate'>
              {post.title}
            </h2>
          </SmartLink>

          <div className='flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs'>
            {post.category && (
              <SmartLink href={`/category/${post.category}`}>
                <span className='text-[#a6e3a1] hover:underline'>
                  ./{post.category}
                </span>
              </SmartLink>
            )}
            {post?.tags?.slice(0, 3).map(t => (
              <SmartLink key={t} href={`/tag/${encodeURIComponent(t)}`}>
                <span className='text-[#585b70] hover:text-[#a6adc8]'>
                  #{t}
                </span>
              </SmartLink>
            ))}
            <TwikooCommentCount post={post} className='text-[#585b70]' />
          </div>
        </div>
      </div>
    </article>
  )
}
