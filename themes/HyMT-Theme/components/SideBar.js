import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'

/**
 * Steam 风格左侧边栏 - 分类过滤 + 标签
 */
export default function SideBar(props) {
  const { categoryOptions, tagOptions } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const currentTag = router.query.tag
  const currentCategory = router.query.category || router.asPath?.split('/category/')[1]

  return (
    <aside className='fixed top-[100px] left-0 z-20 w-[clamp(260px,18vw,400px)] hidden lg:block bg-[#19232f] border-r border-[#2a3038]'>
      <div className='h-[calc(100vh-100px)] flex flex-col'>
        <div className='flex-1 overflow-y-auto py-8 px-5'>
          {/* 标题 */}
          <h2 className='text-[28px] font-semibold uppercase tracking-[0.1em] text-[#e5e5e5] leading-[30px] mb-6'>
            FILTERS
          </h2>

          {/* 搜索 */}
          <div className='mb-6'>
            <div className='text-xs uppercase tracking-wider text-[#a7aeb4] mb-3'>SEARCH</div>
            <input
              type='text'
              placeholder='Search posts...'
              onKeyDown={e => {
                if (e.key === 'Enter' && e.target.value) {
                  const query = { keyword: e.target.value }
                  if (router.query.theme) query.theme = router.query.theme
                  router.push({ pathname: '/search/[keyword]', query })
                }
              }}
              className='w-full bg-[#2a3038] rounded-sm px-3 py-2 text-sm text-[#e5e5e5] placeholder-[#8c8c8c] outline-none border border-transparent focus:border-[#1a9fff] transition-colors'
            />
          </div>

          {/* 菜单 */}
          <div className='mb-6'>
            <div className='text-xs uppercase tracking-wider text-[#a7aeb4] mb-2'>NAVIGATION</div>
            <div className='space-y-0.5'>
              {[
                { href: '/', label: 'Home', show: true },
                { href: '/archive', label: 'Archive', show: siteConfig('HYMT_MENU_ARCHIVE', true, CONFIG) },
                { href: '/category', label: 'Categories', show: siteConfig('HYMT_MENU_CATEGORY', true, CONFIG) },
                { href: '/tag', label: 'Tags', show: siteConfig('HYMT_MENU_TAG', true, CONFIG) },
                { href: '/search', label: 'Search', show: siteConfig('HYMT_MENU_SEARCH', true, CONFIG) }
              ].filter(l => l.show).map(link => (
                <SmartLink key={link.href} href={link.href}>
                  <div className={`block px-3 py-1.5 rounded-sm text-sm transition-colors ${
                    (link.href === '/' ? router.asPath === '/' : router.asPath?.startsWith(link.href))
                      ? 'bg-[#1a9fff]/20 text-[#1a9fff]'
                      : 'text-[#c6d4df] hover:bg-[#2a3038]'
                  }`}>
                    {link.label}
                  </div>
                </SmartLink>
              ))}
            </div>
          </div>

          {/* 分类过滤 */}
          {categoryOptions?.length > 0 && (
            <div className='mb-6'>
              <div className='text-xs uppercase tracking-wider text-[#a7aeb4] mb-2'>
                {locale.COMMON.CATEGORY}
              </div>
              <div className='space-y-0.5'>
                {categoryOptions.map(cat => {
                  const isActive = currentCategory === cat.name
                  return (
                    <SmartLink key={cat.name} href={`/category/${cat.name}`}>
                      <div className={`flex justify-between items-center px-3 py-1.5 rounded-sm text-sm transition-colors ${
                        isActive
                          ? 'bg-[#1a9fff]/20 text-[#1a9fff]'
                          : 'text-[#8c8c8c] hover:text-[#c6d4df] hover:bg-[#2a3038]'
                      }`}>
                        <span>{cat.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-sm ${isActive ? 'bg-[#1a9fff]/30' : 'bg-[#3d4450]'}`}>
                          {cat.count}
                        </span>
                      </div>
                    </SmartLink>
                  )
                })}
              </div>
            </div>
          )}

          {/* 标签 */}
          {tagOptions?.length > 0 && (
            <div className='mb-6'>
              <div className='text-xs uppercase tracking-wider text-[#a7aeb4] mb-2'>
                {locale.COMMON.TAGS}
              </div>
              <div className='flex flex-wrap gap-1.5'>
                {tagOptions.slice(0, 15).map(tag => {
                  const isActive = currentTag === tag.name
                  return (
                    <SmartLink key={tag.name} href={`/tag/${encodeURIComponent(tag.name)}`}>
                      <span className={`inline-block px-2 py-1 rounded-sm text-xs transition-colors ${
                        isActive
                          ? 'bg-[#1a9fff] text-white'
                          : 'bg-[#3d4450] text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#4f5764]'
                      }`}>
                        {tag.name}
                      </span>
                    </SmartLink>
                  )
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </aside>
  )
}
