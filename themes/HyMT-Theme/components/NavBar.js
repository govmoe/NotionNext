import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useState, useRef, useCallback } from 'react'
import { useHyMTGlobal } from '..'
import { MenuList } from './MenuList'

let isComposing = false

export default function NavBar(props) {
  const [showSearchInput, changeShowSearchInput] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)
  const router = useRouter()
  const { searchModal } = useHyMTGlobal()

  const doSearch = useCallback(() => {
    const val = searchValue.trim()
    if (!val) return
    const query = { keyword: val }
    if (router.query.theme) query.theme = router.query.theme
    router.push({ pathname: '/search/[keyword]', query })
    changeShowSearchInput(false)
    setSearchValue('')
  }, [searchValue, router])

  const handleSearchClick = () => {
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
      return
    }
    if (showSearchInput) {
      doSearch()
    } else {
      changeShowSearchInput(true)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault()
      doSearch()
    } else if (e.key === 'Escape') {
      changeShowSearchInput(false)
      setSearchValue('')
    }
  }

  const handleClose = () => {
    changeShowSearchInput(false)
    setSearchValue('')
  }

  return (
    <nav className='bg-[#2a3038] border-b border-[#373c44]'>
      <div className='max-w-[1400px] mx-auto px-4 md:px-6 h-11 flex items-center gap-2'>
        <div className='flex-1 flex items-center h-full'>
          {showSearchInput && (
            <div className='relative flex-1 flex items-center'>
              <input
                ref={inputRef}
                autoFocus
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onCompositionStart={() => { isComposing = true }}
                onCompositionEnd={() => { isComposing = false }}
                className='w-full h-8 pl-3 pr-8 outline-none rounded-sm bg-[#3d4450] text-sm text-[#e5e5e5] placeholder-[#8c8c8c] border border-transparent focus:border-[#1a9fff] transition-colors'
                autoComplete='off'
                placeholder='Search...'
              />
              {searchValue && (
                <button
                  onClick={() => setSearchValue('')}
                  className='absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-[#e5e5e5] transition-colors'>
                  <i className='fas fa-times text-[10px]' />
                </button>
              )}
            </div>
          )}
          {!showSearchInput && <MenuList {...props} />}
        </div>

        {showSearchInput && (
          <button
            onClick={handleClose}
            className='w-8 h-8 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#3d4450] transition-colors'>
            <i className='fa-solid fa-xmark text-xs' />
          </button>
        )}
        {!showSearchInput && (
          <button
            onClick={handleSearchClick}
            className='w-8 h-8 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-[#e5e5e5] hover:bg-[#3d4450] transition-colors'>
            <i className='fa-solid fa-magnifying-glass text-xs' />
          </button>
        )}
      </div>
    </nav>
  )
}
