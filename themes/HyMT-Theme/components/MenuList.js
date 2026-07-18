import Collapse from '@/components/Collapse'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'
import { MenuItemDrop } from './MenuItemDrop'

export const MenuList = ({ customNav, customMenu }) => {
  const { locale } = useGlobal()
  const [isOpen, changeIsOpen] = useState(false)
  const router = useRouter()
  const collapseRef = useRef(null)
  useEffect(() => { router.events.on('routeChangeStart', () => changeIsOpen(false)) })

  let links = [
    { icon: 'fas fa-search', name: 'SEARCH', href: '/search', show: siteConfig('HYMT_MENU_SEARCH', null, CONFIG) },
    { icon: 'fas fa-archive', name: 'ARCHIVE', href: '/archive', show: siteConfig('HYMT_MENU_ARCHIVE', null, CONFIG) },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, href: '/category', show: siteConfig('HYMT_MENU_CATEGORY', null, CONFIG) },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, href: '/tag', show: siteConfig('HYMT_MENU_TAG', null, CONFIG) }
  ]
  if (customNav) links = links.concat(customNav)
  if (siteConfig('CUSTOM_MENU')) links = customMenu
  if (!links?.length) return null

  return (
    <>
      <div className='hidden md:flex items-center gap-1'>
        {links.map((link, index) => <MenuItemDrop key={index} link={link} />)}
      </div>
      <div className='flex md:hidden items-center'>
        <button onClick={() => changeIsOpen(!isOpen)} className='flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs uppercase tracking-wider text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#3d4450] transition-colors'>
          <i className={`fas fa-bars text-xs transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          {!isOpen ? 'MENU' : 'CLOSE'}
        </button>
        <Collapse collapseRef={collapseRef} className='absolute w-full top-full left-0 z-20' isOpen={isOpen}>
          <div className='bg-[#2a3038] border border-[#373c44] mx-4 overflow-hidden'>
            {links.map((link, index) => (
              <MenuItemCollapse key={index} link={link} onHeightChange={p => collapseRef.current?.updateCollapseHeight(p)} />
            ))}
          </div>
        </Collapse>
      </div>
    </>
  )
}
