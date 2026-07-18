import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

export default function TopBar(props) {
  const content = siteConfig('HYMT_TOP_BAR_CONTENT', null, CONFIG)
  if (!content) return <></>
  return (
    <header className='flex justify-center items-center bg-gradient-to-r from-[#10a2d7] to-[#2b74fe]'>
      <div className='max-w-[1400px] w-full px-4'>
        <div className='text-xs text-center text-white/90 py-2 tracking-wider' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </header>
  )
}
