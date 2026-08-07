export default function ArticleLock({ validPassword }) {
  return (
    <div className='flex flex-col items-center py-20 text-sm'>
      <div className='text-[#585b70] mb-6'>Permission denied (publickey).</div>
      <div className='text-[#f9e2af] mb-6'>Password required to continue._</div>
      <div className='flex gap-2'>
        <input
          id='password'
          type='password'
          placeholder='password'
          onKeyDown={e => {
            if (e.key === 'Enter' && validPassword) validPassword(e.target.value)
          }}
          className='bg-[#1e1e2e] border border-[#313244] rounded px-4 py-2 text-[#cdd6f4] placeholder-[#585b70] outline-none focus:border-[#89b4fa]'
        />
        <button
          onClick={() => {
            const p = document.getElementById('password')
            if (p && validPassword) validPassword(p.value)
          }}
          className='px-4 py-2 text-xs border border-[#313244] rounded text-[#a6adc8] hover:text-[#cdd6f4] hover:border-[#89b4fa] transition-colors'>
          auth
        </button>
      </div>
    </div>
  )
}
