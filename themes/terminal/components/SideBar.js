import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'

export default function SideBar(props) {
  const { categoryOptions, tagOptions, latestPosts, post } = props
  const { locale } = useGlobal()

  return (
    <div className='space-y-8 text-sm'>
      {post?.toc && post?.toc.length > 2 && (
        <div>
          <div className='text-xs text-[#585b70] mb-2'>table of contents</div>
          <div className='space-y-1'>
            {post.toc.map(item => (
              <a key={item.id} href={`#${item.id}`} className='block text-xs text-[#a6adc8] hover:text-[#cdd6f4] truncate pl-(--pad)'
                style={{ '--pad': `${(item.indentLevel || 0) * 12}px` }}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}

      {categoryOptions?.length > 0 && (
        <div>
          <div className='text-xs text-[#585b70] mb-2'>./category</div>
          <div className='space-y-0.5'>
            {categoryOptions.map(cat => (
              <SmartLink key={cat.name} href={`/category/${cat.name}`} className='no-underline'>
                <div className='flex justify-between text-xs py-1 hover:text-[#a6e3a1] text-[#a6adc8]'>
                  <span>/{cat.name}</span>
                  <span className='text-[#585b70]'>{cat.count}</span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      )}

      {tagOptions?.length > 0 && (
        <div>
          <div className='text-xs text-[#585b70] mb-2'>./tag</div>
          <div className='flex flex-wrap gap-1.5'>
            {tagOptions.slice(0, 15).map(tag => (
              <SmartLink key={tag.name} href={`/tag/${encodeURIComponent(tag.name)}`}>
                <span className='text-xs text-[#a6adc8] hover:text-[#f9e2af]'>
                  #{tag.name}
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
      )}

      {latestPosts?.length > 0 && (
        <div>
          <div className='text-xs text-[#585b70] mb-2'>latest</div>
          <div className='space-y-0.5'>
            {latestPosts.slice(0, 5).map(p => (
              <SmartLink key={p.id} href={`/${p.slug}`} className='no-underline'>
                <div className='text-xs py-0.5 text-[#a6adc8] hover:text-[#cdd6f4] truncate'>
                  {p.title}
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
