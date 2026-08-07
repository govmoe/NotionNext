import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import Typewriter from './Typewriter'

export default function HeroSection(props) {
  const heroBio = siteConfig('XUHOME_HERO_BIO', '', CONFIG) || siteConfig('BIO')
  const heroTextsRaw = siteConfig('XUHOME_HERO_TEXTS', [], CONFIG)
  const heroTexts = Array.isArray(heroTextsRaw) ? heroTextsRaw : typeof heroTextsRaw === 'string' ? heroTextsRaw.split('|').map(s => s.trim()).filter(Boolean) : []
  const heroTitle = siteConfig('XUHOME_HERO_TITLE', '', CONFIG) || siteConfig('TITLE')
  const ctaText = siteConfig('XUHOME_HERO_CTA_TEXT', '', CONFIG)
  const ctaLink = siteConfig('XUHOME_HERO_CTA_LINK', '/about', CONFIG)
  const typeSpeed = siteConfig('XUHOME_HERO_TYPE_SPEED', 80, CONFIG)
  const deleteSpeed = siteConfig('XUHOME_HERO_DELETE_SPEED', 40, CONFIG)
  const typePause = siteConfig('XUHOME_HERO_TYPE_PAUSE', 2000, CONFIG)

  const texts = heroTexts.length > 0 ? heroTexts : [heroTitle]

  return (
    <div className='mb-8'>
      <div className='text-3xl font-black text-[#0f172a] uppercase tracking-tight mb-2 min-h-[2.5rem]'>
        {texts.length > 1 ? (
          <Typewriter
            texts={texts}
            speed={typeSpeed}
            deleteSpeed={deleteSpeed}
            pause={typePause}
            loop={true}
          />
        ) : (
          <Typewriter texts={texts} speed={typeSpeed} loop={false} />
        )}
      </div>

      {heroBio && (
        <p className='text-base text-slate-600 dark:text-slate-400 font-semibold leading-relaxed max-w-2xl'>
          {heroBio}
        </p>
      )}

      {ctaText && (
        <div className='mt-4 flex flex-wrap gap-2'>
          <SmartLink href={ctaLink} className='no-underline'>
            <span className='inline-block border-2 border-[#0f172a] rounded-sm shadow-[2px_2px_0px_0px_#0f172a] bg-[#f59e0b] px-4 py-2 font-black text-xs text-[#0f172a] uppercase tracking-wider hover:bg-[#1e293b] hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all'>
              {ctaText} →
            </span>
          </SmartLink>
        </div>
      )}

      <div className='mt-6 border-b-[3px] border-[#0f172a]' />
    </div>
  )
}
