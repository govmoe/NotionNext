export default function ArticleLock({ validPassword }) {
  return (
    <div className='flex flex-col items-center py-20'>
      <div className='border-2 border-[#0f172a] rounded-sm shadow-[4px_4px_0px_0px_#0f172a] bg-[#ffffff] dark:bg-slate-800 p-8 max-w-sm w-full text-center'>
        <div className='text-3xl mb-4'>{'\u{1F512}'}</div>
        <p className='font-black text-sm text-[#0f172a] uppercase tracking-wider mb-6'>Protected Post</p>
        <div className='flex gap-2'>
          <input
            id='password'
            type='password'
            placeholder='Password'
            onKeyDown={e => { if (e.key === 'Enter' && validPassword) validPassword(e.target.value) }}
            className='flex-1 border-[3px] border-[#0f172a] rounded-sm shadow-[2px_2px_0px_0px_#0f172a] px-4 py-2.5 font-extrabold text-sm outline-none bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400'
          />
          <button
            onClick={() => { const p = document.getElementById('password'); if (p && validPassword) validPassword(p.value) }}
            className='border-2 border-[#0f172a] rounded-sm shadow-[2px_2px_0px_0px_#0f172a] bg-[#f59e0b] px-4 py-2.5 font-black text-sm text-[#0f172a] uppercase tracking-wider hover:bg-[#1e293b] hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all'>
            Go
          </button>
        </div>
      </div>
    </div>
  )
}
