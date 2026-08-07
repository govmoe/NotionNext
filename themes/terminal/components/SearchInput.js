import { useRouter } from 'next/router'

export default function SearchInput(props) {
  const { keyword } = props
  const router = useRouter()

  return (
    <div className='flex items-baseline gap-2 text-sm'>
      <span className='text-[#a6e3a1]'>~</span>
      <span className='text-[#89b4fa]'>$</span>
      <span className='text-[#cdd6f4]'>grep</span>
      <span className='text-[#f38ba8]'>-r</span>
      <span className='text-[#f9e2af]'>&quot;</span>
      <input
        type='text'
        defaultValue={keyword || ''}
        placeholder='...'
        onKeyDown={e => {
          if (e.key === 'Enter' && e.target.value) {
            const query = { keyword: e.target.value }
            if (router.query.theme) query.theme = router.query.theme
            router.push({ pathname: '/search/[keyword]', query })
          }
        }}
        className='flex-1 bg-transparent border-none outline-none text-[#cdd6f4] placeholder-[#585b70]'
      />
      <span className='text-[#f9e2af]'>&quot;</span>
    </div>
  )
}
