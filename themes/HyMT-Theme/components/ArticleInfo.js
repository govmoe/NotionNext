import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import NotionIcon from '@/components/NotionIcon'

export default function ArticleInfo(props) {
  const { post } = props
  const { locale } = useGlobal()

  return (
    <section>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-3'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
        {post?.title}
      </h1>

      {post?.type !== 'Page' && (
        <div className='flex flex-wrap items-center gap-2 text-sm'>
          <span className='text-[11px] uppercase tracking-wider text-[#5fa3d3]'>ARTICLE</span>
          <span className='text-[#8c8c8c]'>|</span>

          <span className='text-[#8c8c8c] text-sm'>
            <a href={siteConfig('HYMT_AUTHOR_LINK', null, CONFIG)} className='hover:text-[#c6d4df] transition-colors'>
              {siteConfig('AUTHOR')}
            </a>
          </span>
          <span className='text-[#8c8c8c]'>|</span>
          <span className='text-[#8c8c8c] text-sm'>{post?.publishDay}</span>

          {post?.category && (
            <>
              <span className='text-[#8c8c8c]'>|</span>
              <SmartLink href={`/category/${post?.category}`}>
                <span className='text-[#c6d4df] hover:text-[#1a9fff] transition-colors text-sm'>
                  {post?.category}
                </span>
              </SmartLink>
            </>
          )}
        </div>
      )}

      {post?.tags?.length > 0 && (
        <div className='flex flex-wrap gap-1.5 mt-2'>
          {post.tags.map(t => (
            <SmartLink key={t} href={`/tag/${t}`}>
              <span className='inline-block px-2 py-0.5 rounded-sm text-[11px] bg-[#3d4450] text-[#8c8c8c] hover:bg-[#1a9fff] hover:text-white transition-colors'>
                {t}
              </span>
            </SmartLink>
          ))}
        </div>
      )}

      {post?.type !== 'Page' && (
        <div className='flex items-center gap-2 mt-3 text-[11px] text-[#61686d]'>
          <span>
            {locale.COMMON.POST_TIME}:
            <SmartLink href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`} passHref
              className='ml-1 hover:text-[#c6d4df] transition-colors'>
              {post?.publishDay}
            </SmartLink>
          </span>
          <span>|</span>
          <span>{locale.COMMON.LAST_EDITED_TIME}: {post?.lastEditedDay}</span>
          <span className='hidden busuanzi_container_page_pv'>
            | <span className='busuanzi_value_page_pv' /> views
          </span>
        </div>
      )}

      <div className='mt-5 border-t border-[#373c44]' />
    </section>
  )
}
