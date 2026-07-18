import { useGlobal } from '@/lib/global'
import { useEffect, useRef } from 'react'

export default function ArticleLock(props) {
  const { validPassword } = props
  const { locale } = useGlobal()
  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) tips.innerHTML = `<div class='text-red-500'>${locale.COMMON.PASSWORD_ERROR}</div>`
    }
  }
  const passwordInputRef = useRef(null)
  useEffect(() => { passwordInputRef.current.focus() }, [])

  return (
    <div className='w-full flex justify-center items-center min-h-[400px]'>
      <div className='text-center space-y-4 max-w-sm w-full'>
        <div className='text-sm uppercase tracking-wider text-[#e5e5e5] font-semibold'>{locale.COMMON.ARTICLE_LOCK_TIPS}</div>
        <div className='flex rounded-sm overflow-hidden'>
          <input
            id='password' type='password'
            onKeyDown={e => { if (e.key === 'Enter') submitPassword() }}
            ref={passwordInputRef}
            className='outline-none w-full text-sm pl-4 leading-10 text-[#e5e5e5] bg-[#3d4450] placeholder-[#8c8c8c]'
            placeholder='Password'
          />
          <button onClick={submitPassword} className='px-5 cursor-pointer flex items-center justify-center bg-[#1a9fff] hover:bg-[#07bfff] text-white text-sm font-semibold uppercase tracking-wider transition-colors'>
            {locale.COMMON.SUBMIT}
          </button>
        </div>
        <div id='tips' />
      </div>
    </div>
  )
}
