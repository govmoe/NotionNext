import { siteConfig } from '@/lib/config'
import { useRef } from 'react'
import { handleEmailClick } from '@/lib/plugins/mailEncrypt'

const SocialButton = () => {
  const CONTACT_EMAIL = siteConfig('CONTACT_EMAIL')
  const emailIcon = useRef(null)

  const socials = [
    { key: 'CONTACT_GITHUB', icon: 'fab fa-github', label: 'GitHub' },
    { key: 'CONTACT_TWITTER', icon: 'fab fa-twitter', label: 'Twitter' },
    { key: 'CONTACT_TELEGRAM', icon: 'fab fa-telegram', label: 'Telegram' },
    { key: 'CONTACT_BILIBILI', icon: 'fab fa-bilibili', label: 'Bilibili' },
    { key: 'CONTACT_YOUTUBE', icon: 'fab fa-youtube', label: 'YouTube' }
  ]

  return (
    <div className='flex items-center gap-1'>
      {socials.map(({ key, icon, label }) =>
        siteConfig(key) && (
          <a key={key} target='_blank' rel='noreferrer' title={label} href={siteConfig(key)}
            className='w-8 h-8 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#3d4450] transition-colors'>
            <i className={`${icon} text-base`} />
          </a>
        )
      )}
      {CONTACT_EMAIL && (
        <a onClick={e => handleEmailClick(e, emailIcon, CONTACT_EMAIL)} target='_blank' rel='noreferrer'
          title='Email' ref={emailIcon}
          className='w-8 h-8 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#3d4450] transition-colors cursor-pointer'>
          <i className='fas fa-envelope text-base' />
        </a>
      )}
      {JSON.parse(siteConfig('ENABLE_RSS')) && (
        <a target='_blank' rel='noreferrer' title='RSS' href='/rss/feed.xml'
          className='w-8 h-8 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#3d4450] transition-colors'>
          <i className='fas fa-rss text-base' />
        </a>
      )}
    </div>
  )
}
export default SocialButton
