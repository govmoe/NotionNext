import SmartLink from '@/components/SmartLink'

export default function ArticleAround({ prev, next }) {
  return (
    <div className='flex justify-between py-6 mt-8 border-t border-[#313244] text-sm'>
      {prev ? (
        <SmartLink href={`/${prev.slug}`} className='no-underline group max-w-[45%]'>
          <div className='text-xs text-[#585b70] mb-1'>{'<< prev'}</div>
          <div className='text-[#a6adc8] group-hover:text-[#89b4fa] truncate'>
            {prev.title}
          </div>
        </SmartLink>
      ) : <div />}
      {next ? (
        <SmartLink href={`/${next.slug}`} className='no-underline group text-right max-w-[45%]'>
          <div className='text-xs text-[#585b70] mb-1'>{'next >>'}</div>
          <div className='text-[#a6adc8] group-hover:text-[#89b4fa] truncate'>
            {next.title}
          </div>
        </SmartLink>
      ) : <div />}
    </div>
  )
}
