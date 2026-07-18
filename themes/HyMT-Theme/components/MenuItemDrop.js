import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0
  if (!link?.show) return null

  return (
    <div className='relative' onMouseOver={() => changeShow(true)} onMouseOut={() => changeShow(false)}>
      {!hasSubMenu && (
        <SmartLink href={link?.href} target={link?.target}>
          <span className='nav-link inline-flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider text-[#8c8c8c] hover:text-[#e5e5e5] transition-colors'>
            {link?.icon && <i className={`${link.icon} text-[10px]`} />}
            {link?.name}
          </span>
        </SmartLink>
      )}
      {hasSubMenu && (
        <div className='nav-link inline-flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider text-[#8c8c8c] hover:text-[#e5e5e5] transition-colors cursor-pointer'>
          {link?.icon && <i className={`${link.icon} text-[10px]`} />}
          {link?.name}
          <i className={`fas fa-chevron-down text-[10px] transition-transform ${show ? 'rotate-180' : ''}`} />
        </div>
      )}
      {hasSubMenu && (
        <ul className={`${show ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full mt-0.5 min-w-[160px] bg-[#2a3038] border border-[#373c44] py-1 transition-all z-20`}>
          {link.subMenus.map((sLink, i) => (
            <li key={i}>
              <SmartLink href={sLink.href} target={link?.target}>
                <span className='block px-4 py-2 text-sm text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-white/[0.05] transition-colors'>
                  {sLink?.icon && <i className={`${sLink.icon} mr-2 text-xs`} />}
                  {sLink.title}
                </span>
              </SmartLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
