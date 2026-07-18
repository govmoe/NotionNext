import Collapse from '@/components/Collapse'
import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

export const MenuItemCollapse = props => {
  const { link } = props
  const hasSubMenu = link?.subMenus?.length > 0
  const [isOpen, changeIsOpen] = useState(false)
  if (!link?.show) return null

  return (
    <>
      <div className='w-full px-5 py-3 border-b border-[#373c44] hover:bg-white/[0.03] transition-colors cursor-pointer'>
        {!hasSubMenu && (
          <SmartLink href={link?.href} target={link?.target}>
            <span className='flex items-center gap-2 text-sm text-[#c6d4df] hover:text-[#e5e5e5] transition-colors'>
              {link?.icon && <i className={`${link.icon} text-xs w-4 text-center`} />}
              {link?.name}
            </span>
          </SmartLink>
        )}
        {hasSubMenu && (
          <div onClick={() => changeIsOpen(!isOpen)} className='flex items-center justify-between'>
            <span className='flex items-center gap-2 text-sm text-[#c6d4df]'>
              {link?.icon && <i className={`${link.icon} text-xs w-4 text-center`} />}
              {link?.name}
            </span>
            <i className={`fas fa-chevron-down text-xs text-[#8c8c8c] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        )}
      </div>
      {hasSubMenu && (
        <Collapse isOpen={isOpen} onHeightChange={props.onHeightChange}>
          <div className='bg-[#1b2838]'>
            {link.subMenus.map((sLink, i) => (
              <div key={i} className='px-10 py-2.5 border-b border-[#373c44]/50 last:border-b-0 hover:bg-white/[0.03] transition-colors'>
                <SmartLink href={sLink.href} target={link?.target}>
                  <span className='flex items-center gap-2 text-sm text-[#8c8c8c] hover:text-[#c6d4df] transition-colors'>
                    {sLink?.icon && <i className={`${sLink.icon} text-xs w-4 text-center`} />}
                    {sLink.title}
                  </span>
                </SmartLink>
              </div>
            ))}
          </div>
        </Collapse>
      )}
    </>
  )
}
