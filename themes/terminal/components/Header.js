import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

export default function Header(props) {
  return (
    <div className='mb-4'>
      <SmartLink href='/' className='no-underline group'>
        <div className='flex items-center gap-3'>
          <span className='text-[#a6e3a1] text-lg'>~</span>
          <span className='text-[#89b4fa] text-lg'>$</span>
          <span className='text-[#cdd6f4] text-lg font-bold'>
            {siteConfig('TITLE')}
          </span>
          <span className='inline-block w-2.5 h-5 bg-[#89b4fa] cursor-blink ml-0.5' />
        </div>
      </SmartLink>
      {siteConfig('BIO') && (
        <div className='mt-1 ml-9 text-sm text-[#585b70]'>
          {siteConfig('BIO')}
        </div>
      )}
    </div>
  )
}
