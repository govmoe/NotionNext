import { siteConfig } from '@/lib/config'
import PoweredBy from '@/components/PoweredBy'

export default function Footer(props) {
  return (
    <footer className='border-t-4 border-[#0f172a] mt-16 bg-white dark:bg-slate-800'>
      <div className='max-w-6xl mx-auto px-4 md:px-6 py-6 flex flex-wrap justify-between items-center text-xs font-black text-[#0f172a] uppercase tracking-wider'>
        <span>{'\u00A9'} {new Date().getFullYear()} {siteConfig('AUTHOR')}</span>
        <span className='text-slate-500 dark:text-slate-400 font-semibold normal-case tracking-normal'>
          <PoweredBy />
        </span>
      </div>
    </footer>
  )
}
