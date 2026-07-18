import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * Steam 风格博客卡片 - 横向布局（封面在右）
 */
export const BlogItem = props => {
  const { post } = props
  const { NOTION_CONFIG } = useGlobal()
  const showPageCover = siteConfig('HYMT_POST_COVER_ENABLE', true, CONFIG)
  const showPreview = siteConfig('POST_LIST_PREVIEW', false, NOTION_CONFIG) && post.blockMap

  return (
    <div key={post.id} className='card-glow mb-4 group'>
      <article
        className='rounded-sm overflow-hidden flex flex-col md:flex-row'
        style={{
          background: 'radial-gradient(circle at top left, rgba(255,255,255,0.08), rgba(255,255,255,0.02))'
        }}>
        {/* 左侧内容 */}
        <div className='flex-1 flex flex-col justify-between p-4 md:p-5 min-w-0'>
          <div>
            {/* 游戏/分类名 */}
            {post.category && (
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-[13px] text-[#c6d4df] font-light'>
                  {post.category}
                </span>
              </div>
            )}

            {/* 标题 */}
            <h2 className='mb-2'>
              <SmartLink href={post.href}>
                <span className='text-xl md:text-2xl font-medium text-white hover:text-[#1a9fff] transition-colors leading-snug'>
                  {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
                  {post.title}
                </span>
              </SmartLink>
            </h2>

            {/* 描述 */}
            {!showPreview && post.summary && (
              <p className='text-sm md:text-base text-[#e5e5e5] font-light leading-relaxed line-clamp-3 max-w-[700px]'>
                {post.summary}
              </p>
            )}

            {/* 预览 */}
            {showPreview && post?.blockMap && (
              <div className='max-h-36 overflow-hidden relative mb-2'>
                <NotionPage post={post} />
                <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1b2838] to-transparent' />
              </div>
            )}
          </div>

          {/* 底部信息 */}
          <div className='flex items-center gap-4 mt-3'>
            {/* 事件类型标签 */}
            {post.category && (
              <span className='text-[11px] uppercase tracking-wider text-[#5fa3d3]'>
                ARTICLE
              </span>
            )}

            {/* 日期 */}
            <span className='text-[11px] text-[#8c8c8c]'>
              {post.date?.start_date || post.createdTime}
            </span>

            <div className='flex-1' />

            {/* 评论数 */}
            <TwikooCommentCount post={post} />
          </div>

          {/* 标签 */}
          {post?.tags?.length > 0 && (
            <div className='flex items-center gap-1.5 mt-2 flex-wrap'>
              {post.tags.slice(0, 4).map(t => (
                <SmartLink key={t} href={`/tag/${t}`}>
                  <span className='text-[11px] text-[#8c8c8c] hover:text-[#c6d4df] transition-colors px-1.5 py-0.5 rounded-sm bg-[#3d4450]/50'>
                    {t}
                  </span>
                </SmartLink>
              ))}
            </div>
          )}
        </div>

        {/* 右侧封面图 */}
        {showPageCover && post?.pageCoverThumbnail && (
          <SmartLink href={post.href} passHref legacyBehavior>
            <div className='md:w-[clamp(250px,30vw,350px)] md:flex-shrink-0 overflow-hidden'>
              <div className='relative h-full min-h-[180px] md:min-h-0'>
                <LazyImage
                  src={post?.pageCoverThumbnail}
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
            </div>
          </SmartLink>
        )}
      </article>
    </div>
  )
}
