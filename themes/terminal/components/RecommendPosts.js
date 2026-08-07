import SmartLink from '@/components/SmartLink'

export default function RecommendPosts({ recommendPosts }) {
  if (!recommendPosts?.length) return null

  return (
    <div className='mt-8 pt-6 border-t border-[#313244]'>
      <div className='text-xs text-[#585b70] mb-3'>see also:</div>
      <div className='space-y-2'>
        {recommendPosts.map(post => (
          <SmartLink key={post.id} href={`/${post.slug}`} className='no-underline group block'>
            <span className='text-sm text-[#a6adc8] group-hover:text-[#89b4fa] transition-colors'>
              {post.title}
            </span>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}
