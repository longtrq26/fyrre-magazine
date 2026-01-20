import Footer from '@/components/shared/layout/footer'
import Header from '@/components/shared/layout/header'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="t-default bg-bg-default text-t-default">{children}</div>
      <Footer />
    </>
  )
}

export default RootLayout
