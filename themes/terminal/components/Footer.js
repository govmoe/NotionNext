import { siteConfig } from '@/lib/config'
import PoweredBy from '@/components/PoweredBy'

export default function Footer(props) {
  return (
    <div className='mt-16 mb-8 text-center'>
      <div className='text-xs text-[#585b70] space-y-1'>
        <div>
          <span className='text-[#a6e3a1]'>[exit</span>
          <span className='text-[#cdd6f4]'> 0</span>
          <span className='text-[#a6e3a1]'>]</span>
          <span className='mx-3 text-[#313244]'>|</span>
          &copy; {new Date().getFullYear()} {siteConfig('AUTHOR')}
        </div>
        <PoweredBy />
      </div>
    </div>
  )
}
