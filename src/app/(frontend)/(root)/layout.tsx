import Footer from '@/components/shared/layout/footer'
import Header from '@/components/shared/layout/header'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Header />
      <div className="t-default bg-bg-default text-t-default flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default RootLayout
