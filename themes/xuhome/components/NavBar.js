import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import MenuItemDrop from './MenuItemDrop'
import DarkModeToggle from './DarkModeToggle'

export default function NavBar(props) {
  const { categoryOptions, tagOptions, customNav, customMenu } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const path = router.asPath?.split('?')[0] || '/'

  const defaultLinks = [
    { id: 1, name: 'Home', href: '/', show: true },
    { id: 2, name: locale.NAV.ARCHIVE || 'Archive', href: '/archive', show: siteConfig('XUHOME_MENU_ARCHIVE', true, CONFIG) },
    { id: 3, name: locale.COMMON.TAGS || 'Tags', href: '/tag', show: siteConfig('XUHOME_MENU_TAG', true, CONFIG) && tagOptions?.length > 0 },
    { id: 4, name: locale.NAV.SEARCH || 'Search', href: '/search', show: siteConfig('XUHOME_MENU_SEARCH', true, CONFIG) }
  ].filter(l => l.show !== false)

  let links = defaultLinks
  if (Array.isArray(customNav) && customNav.length > 0) {
    links = links.concat(customNav.map((item, i) => ({ ...item, id: `nav-${i}` })))
  }
  if (siteConfig('CUSTOM_MENU') && Array.isArray(customMenu) && customMenu.length > 0) {
    links = customMenu
  }

  const active = href => {
    if (!href) return false
    return href === '/' ? path === '/' : path.startsWith(href)
  }

  const linkActive = link => {
    if (link.subMenus?.length > 0) {
      return link.subMenus.some(sub => active(sub.href || sub.url))
    }
    return active(link.href || link.url)
  }

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
            <MenuItemDrop key={link.id || link.name} link={link} />
          ))}
        </nav>

        <div className='ml-auto'>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
