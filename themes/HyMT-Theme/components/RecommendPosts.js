import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

const RecommendPosts = ({ recommendPosts }) => {
  const { locale } = useGlobal()
  if (!siteConfig('HYMT_ARTICLE_RECOMMEND_POSTS', null, CONFIG) || !recommendPosts || recommendPosts.length < 1) return <></>

  return (
    <div className='my-6'>
      <div className='bg-[#202227] rounded-sm p-5'>
        <h3 className='text-sm font-semibold uppercase tracking-wider text-[#e5e5e5] mb-3'>
          {locale.COMMON.RELATE_POSTS}
        </h3>
        <div className='space-y-1'>
          {recommendPosts.map(post => (
            <SmartLink key={post.id} href={`/${post.slug}`}>
              <div className='block py-2 px-2 -mx-2 rounded-sm text-sm text-[#8c8c8c] hover:text-[#c6d4df] hover:bg-white/[0.05] transition-colors'>
                {post.title}
              </div>
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  )
}
export default RecommendPosts
