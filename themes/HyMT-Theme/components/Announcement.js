import dynamic from 'next/dynamic'
const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post }) => {
  if (!post) return <></>
  return (
    <div>
      <div className='text-xs uppercase tracking-wider text-[#a7aeb4] mb-2'>NOTICE</div>
      <div id='announcement-content' className='text-sm text-[#8c8c8c]'>
        <NotionPage post={post} />
      </div>
    </div>
  )
}
export default Announcement
