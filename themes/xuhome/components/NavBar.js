import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'

export default function NavBar(props) {
  const { categoryOptions, tagOptions } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const path = router.asPath?.split('?')[0] || '/'

  const links = [
    { href: '/', label: 'Home' },
    { href: '/archive', label: 'Archive', show: siteConfig('XUHOME_MENU_ARCHIVE', true, CONFIG) },
    { href: '/tag', label: 'Tags', show: siteConfig('XUHOME_MENU_TAG', true, CONFIG) && tagOptions?.length > 0 },
    { href: '/search', label: 'Search', show: siteConfig('XUHOME_MENU_SEARCH', true, CONFIG) }
  ].filter(l => l.show !== false)

  const active = href => href === '/' ? path === '/' : path.startsWith(href)

  return (
    <header className='top-0 z-[100] bg-white dark:bg-slate-800 border-b-4 border-[#0284c7] px-4 py-2 shadow-[0px_4px_0px_0px_rgba(2,132,199,0.2)]'>
      <div className='max-w-6xl mx-auto flex flex-wrap items-center gap-2'>
        <SmartLink href='/' className='flex items-center gap-2 text-[#0284c7] hover:opacity-80 transition-opacity shrink-0 mr-4 no-underline'>
          <span className='w-8 h-8 flex items-center justify-center bg-[#fde68a] border-2 border-[#0284c7] font-black text-lg transform -skew-x-12 shadow-[2px_2px_0px_0px_#0284c7]'>
            <span className='transform skew-x-12'>{siteConfig('TITLE')?.charAt(0) || 'X'}</span>
          </span>
          <span className='font-black uppercase tracking-widest text-sm hidden sm:inline'>{siteConfig('TITLE')}</span>
        </SmartLink>

        <nav className='flex flex-wrap items-center gap-1.5'>
          {links.map(link => (
            <SmartLink key={link.href} href={link.href} className='no-underline'>
              <span className={`inline-block px-2.5 py-1 border-2 border-[#0284c7] rounded-sm font-black uppercase text-xs tracking-wider transition-all cursor-pointer select-none shadow-[2px_2px_0px_0px_#0284c7] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                active(link.href)
                  ? 'bg-[#0ea5e9] text-white'
                  : 'bg-[rgba(250,248,245,0.55)] dark:bg-slate-700 text-[#0284c7] hover:bg-[#0ea5e9] hover:text-white'
              }`}>
                {link.label}
              </span>
            </SmartLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
