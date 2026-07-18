import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * Steam 风格顶部栏
 */
export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className='bg-[#171a21] border-b border-[#2a2e35]'>
      <div className='max-w-[1400px] mx-auto px-4 md:px-6 h-14 flex items-center'>
        <SmartLink href='/' className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
          <LazyImage
            priority={true}
            src={siteInfo?.icon}
            className='w-8 h-8 rounded-sm'
            width={32}
            height={32}
            alt={siteConfig('AUTHOR')}
          />
          <span className='text-sm font-semibold uppercase tracking-wider text-[#c6d4df]'>
            {siteConfig('AUTHOR')}
          </span>
        </SmartLink>

        <div className='flex-1' />

        <div className='text-xs text-[#8c8c8c]'>
          <SmartLink href='/' className='hover:text-[#c6d4df] transition-colors mr-4'>
            HOME
          </SmartLink>
          <SmartLink href='/archive' className='hover:text-[#c6d4df] transition-colors mr-4'>
            ARCHIVE
          </SmartLink>
          <SmartLink href='/about' className='hover:text-[#c6d4df] transition-colors'>
            ABOUT
          </SmartLink>
        </div>
      </div>
    </header>
  )
}
