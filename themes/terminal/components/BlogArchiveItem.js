import SmartLink from '@/components/SmartLink'

export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  return (
    <div className='mb-8'>
      <div className='text-lg font-bold text-[#f9e2af] mb-4'>
        /{archiveTitle}
      </div>
      <div className='space-y-0.5'>
        {archivePosts?.map(post => (
          <SmartLink key={post.id} href={post.href} className='no-underline group flex items-baseline gap-4 py-1 border-b border-[#1e1e2e] hover:border-[#313244]'>
            <span className='text-xs text-[#585b70] shrink-0 w-24 tabular-nums'>
              {post.date?.start_date?.slice(0, 10) || ''}
            </span>
            <span className='text-sm text-[#cdd6f4] group-hover:text-[#89b4fa] truncate'>
              {post.title}
            </span>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}
