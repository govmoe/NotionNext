import SmartLink from '@/components/SmartLink'

export default function ArticleAround({ prev, next }) {
  if (!prev || !next) return <></>
  return (
    <section className='flex items-center justify-between gap-4 my-6'>
      {prev && (
        <SmartLink href={`/${prev.slug}`} passHref className='group flex-1 min-w-0'>
          <div className='flex items-center gap-3 p-3 rounded-sm bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-[#373c44]/30 hover:border-[#1a9fff]/50 hover:from-white/[0.12] hover:to-white/[0.04] transition-all'>
            <span className='text-[#61686d] group-hover:text-[#1a9fff] shrink-0 text-sm'>←</span>
            <span className='text-sm text-[#8c8c8c] group-hover:text-[#c6d4df] truncate'>{prev.title}</span>
          </div>
        </SmartLink>
      )}
      {next && (
        <SmartLink href={`/${next.slug}`} passHref className='group flex-1 min-w-0 text-right'>
          <div className='flex items-center justify-end gap-3 p-3 rounded-sm bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-[#373c44]/30 hover:border-[#1a9fff]/50 hover:from-white/[0.12] hover:to-white/[0.04] transition-all'>
            <span className='text-sm text-[#8c8c8c] group-hover:text-[#c6d4df] truncate'>{next.title}</span>
            <span className='text-[#61686d] group-hover:text-[#1a9fff] shrink-0 text-sm'>→</span>
          </div>
        </SmartLink>
      )}
    </section>
  )
}
