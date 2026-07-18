import { siteConfig } from '@/lib/config'

export const Title = props => {
  const { post } = props
  const title = post?.title || siteConfig('DESCRIPTION')
  const description = post?.description || siteConfig('AUTHOR')
  return (
    <div className='text-center px-6 py-10 mb-6 rounded-sm bg-[#202227] border border-[#373c44]/30'>
      <h1 className='text-2xl md:text-3xl font-medium text-white mb-2'>{title}</h1>
      <p className='text-sm text-[#8c8c8c] max-w-xl mx-auto'>{description}</p>
    </div>
  )
}
