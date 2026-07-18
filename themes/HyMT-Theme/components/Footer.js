import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'

export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='bg-[#171a21] border-t border-[#2a3038]'>
      <div className='max-w-[1400px] mx-auto px-4 md:px-6'>
        <div className='py-6 flex flex-col md:flex-row items-center justify-between gap-3'>
          <div className='text-xs text-[#61686d] text-center'>
            © {copyrightDate} {siteConfig('AUTHOR')}. All rights reserved.
          </div>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#61686d]'>
            {siteConfig('BEI_AN') && (
              <a href={siteConfig('BEI_AN_LINK')} className='hover:text-[#c6d4df] transition-colors'>
                {siteConfig('BEI_AN')}
              </a>
            )}
            <BeiAnGongAn />
            <span>
              Powered by <a href='https://github.com/tangly1024/NotionNext' className='hover:text-[#c6d4df] transition-colors'>
                NotionNext {siteConfig('VERSION')}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
