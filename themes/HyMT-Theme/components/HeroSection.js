import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * Steam 风格 Hero Banner
 * 蓝色渐变，完全模仿 Steam News Hub 顶部
 */
export default function HeroSection(props) {
  const bannerTitle = siteConfig('HYMT_HERO_TITLE', 'FEATURED NEWS & UPDATES', CONFIG)
  const bannerSubtitle = siteConfig('HYMT_HERO_SUBTITLE', '', CONFIG)

  return (
    <div className='relative w-full bg-gradient-to-r from-[#10a2d7] to-[#2b74fe] text-white overflow-hidden'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-20'>
        {/* 装饰性背景图案 */}
        <div className='absolute top-0 right-0 w-64 h-64 opacity-10'>
          <svg viewBox='0 0 100 100' className='w-full h-full'>
            <circle cx='80' cy='20' r='40' fill='white' />
            <circle cx='20' cy='80' r='30' fill='white' />
          </svg>
        </div>

        <div className='relative z-10'>
          <h1 className='text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4'>
            {bannerTitle}
          </h1>
          {bannerSubtitle && (
            <p className='text-lg md:text-xl text-white/80 font-light max-w-2xl'>
              {bannerSubtitle}
            </p>
          )}
          <div className='mt-8'>
            <a
              href='#posts-wrapper'
              className='inline-block uppercase font-bold text-sm tracking-wider bg-white/10 hover:bg-white/20 border border-white/30 rounded-sm px-10 py-3 transition-colors duration-200 shadow-lg shadow-black/20'>
              READ MORE
            </a>
          </div>
        </div>
      </div>

      {/* 底部三角切角 */}
      <div className='absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#0f1924] via-[#16202e] to-[#0f1924]'
        style={{ clipPath: 'polygon(0 100%, 25% 0, 50% 100%, 75% 0, 100% 100%)' }} />
    </div>
  )
}
