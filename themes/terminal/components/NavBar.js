import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'

export default function NavBar(props) {
  const { categoryOptions, tagOptions } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const currentPath = router.asPath?.split('?')[0] || '/'

  const links = [
    { href: '/', label: 'home', show: true },
    { href: '/archive', label: 'archive', show: siteConfig('TERMINAL_MENU_ARCHIVE', true, CONFIG) },
    { href: '/category', label: 'category', show: siteConfig('TERMINAL_MENU_CATEGORY', true, CONFIG) && categoryOptions?.length > 0 },
    { href: '/tag', label: 'tag', show: siteConfig('TERMINAL_MENU_TAG', true, CONFIG) && tagOptions?.length > 0 },
    { href: '/search', label: 'search', show: siteConfig('TERMINAL_MENU_SEARCH', true, CONFIG) }
  ].filter(l => l.show)

  const isActive = href => href === '/' ? currentPath === '/' : currentPath.startsWith(href)

  return (
    <div className='mb-10 text-sm font-mono'>
      <span className='text-[#a6e3a1]'>~</span>
      <span className='text-[#89b4fa]'> $ </span>
      <span className='text-[#cdd6f4]'>ls</span>
      {' '}
      {links.map((link, i) => (
        <span key={link.href}>
          <SmartLink href={link.href} className='no-underline'>
            <span className={isActive(link.href)
              ? 'text-[#f9e2af] border-b border-[#f9e2af]'
              : 'text-[#a6adc8] hover:text-[#cdd6f4] hover:border-b hover:border-[#585b70]'
            }>
              /{link.label}
            </span>
          </SmartLink>
          {i < links.length - 1 ? <span className='text-[#585b70]'> / </span> : null}
        </span>
      ))}
      <span className='text-[#585b70]'> /</span>
    </div>
  )
}
