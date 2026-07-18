import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState } from 'react'
let lock = false

const SearchInput = ({ keyword, cRef, className }) => {
  const [onLoading, setLoadingState] = useState(false)
  const router = useRouter()
  const searchInputRef = useRef()
  useImperativeHandle(cRef, () => ({ focus: () => { searchInputRef?.current?.focus() } }))

  const handleSearch = () => {
    const key = searchInputRef.current.value
    if (key && key !== '') {
      const query = { keyword: key }
      if (router.query.theme) query.theme = router.query.theme
      setLoadingState(true); router.push({ pathname: '/search/[keyword]', query })
    }
    else router.push({ pathname: '/' })
  }
  const handleKeyDown = e => {
    if (e.key === 'Enter' && !lock) handleSearch()
    else if (e.key === 'Escape') cleanSearch()
  }
  const cleanSearch = () => { searchInputRef.current.value = '' }
  const [showClean, setShowClean] = useState(false)
  const updateSearchKey = val => {
    if (lock) return
    searchInputRef.current.value = val
    setShowClean(!!val)
  }
  function lockSearchInput() { lock = true }
  function unLockSearchInput() { lock = false }

  return (
    <div className={'w-full ' + className}>
      <div className='relative w-full'>
        <input
          ref={searchInputRef}
          type='text'
          className='w-full h-12 pl-12 pr-12 rounded-sm text-sm bg-[#3d4450] text-[#e5e5e5] placeholder-[#8c8c8c] outline-none border border-transparent focus:border-[#1a9fff] transition-colors'
          onKeyDown={handleKeyDown}
          onCompositionStart={lockSearchInput}
          onCompositionUpdate={lockSearchInput}
          onCompositionEnd={unLockSearchInput}
          onChange={e => updateSearchKey(e.target.value)}
          defaultValue={keyword}
          placeholder='Search blog posts...'
        />
        <div className='absolute left-4 top-1/2 -translate-y-1/2 text-[#8c8c8c] pointer-events-none'>
          <i className={`fas ${onLoading ? 'fa-spinner animate-spin' : 'fa-magnifying-glass'} text-sm`} />
        </div>
        {showClean && (
          <button onClick={cleanSearch} className='absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-sm text-[#8c8c8c] hover:text-white hover:bg-[#4f5764] transition-colors'>
            <i className='fas fa-xmark text-xs' />
          </button>
        )}
      </div>
    </div>
  )
}
export default SearchInput
