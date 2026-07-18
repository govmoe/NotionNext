import SmartLink from '@/components/SmartLink'

export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  return (
    <div key={archiveTitle}>
      <div id={archiveTitle} className='pt-10 pb-3 text-sm font-semibold uppercase tracking-wider text-[#e5e5e5]'>
        {archiveTitle}
      </div>
      <ul className='space-y-0.5'>
        {archivePosts[archiveTitle].map(post => (
          <li key={post.id} className='group border-l-2 border-[#2a3038] hover:border-[#1a9fff] pl-4 py-2 transition-colors'>
            <div id={post?.publishDay} className='flex items-baseline gap-3'>
              <span className='text-[11px] text-[#61686d] shrink-0 font-mono'>{post.date?.start_date}</span>
              <SmartLink href={post?.href} passHref className='text-sm text-[#8c8c8c] group-hover:text-[#c6d4df] group-hover:underline transition-colors'>
                {post.title}
              </SmartLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
