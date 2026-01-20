import Footer from '@/components/shared/layout/footer'
import Header from '@/components/shared/layout/header'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-hidden p-[1.25rem_1.5rem] md:p-[3rem_2.5rem]">
      <Header />
      <div className="t-default bg-bg-default text-t-default">{children}</div>
      <Footer />
    </div>
  )
}

export default RootLayout
