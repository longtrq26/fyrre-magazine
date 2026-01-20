import Button from '@/components/ui/button'
import { Marquee } from '@/components/ui/marquee'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-bg-primary flex w-full flex-col">
      {/* marquee */}
      <Marquee className="w-full py-[1rem] [--duration:30s] [--gap:1.5rem] lg:py-[1.25rem]">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            className="font-general-sans text-t-inverse text-[1.25rem] font-semibold uppercase lg:text-[1.375rem]"
          >
            Newsletter+++
          </span>
        ))}
      </Marquee>

      <div className="flex w-full flex-col px-[1.5rem] pb-[1.5rem] lg:px-[2.5rem] lg:pb-[3rem]">
        {/* newsletter */}
        <section className="flex w-full flex-col items-center justify-between gap-[2rem] py-[4rem] lg:flex-row lg:py-[8rem]">
          <p className="h-medium text-t-inverse flex-1 uppercase">Design News to your inbox</p>

          <form className="flex w-full flex-1 flex-col items-center justify-end gap-[0.75rem] lg:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="h-[3.125rem] w-full bg-white px-[0.938rem] text-black ring-white/50 outline-none focus:ring-1 lg:max-w-[19.313rem]"
            />
            <Button className="bg-bg-default text-t-default h-[3.125rem] w-full transition-colors hover:bg-white/90 lg:max-w-fit">
              Sign Up
            </Button>
          </form>
        </section>

        {/* bottom */}
        <div className="flex w-full flex-col gap-[3.5rem] lg:gap-[6rem]">
          {/* navigation */}
          <div className="flex flex-col items-start gap-[2rem] lg:flex-row lg:gap-[10rem] lg:gap-[18.75rem]">
            <Link
              href="/"
              className="relative h-[0.875rem] w-[10rem] shrink-0 lg:h-[1.122rem] lg:w-[13.057rem]"
            >
              <Image src="/logo.svg" alt="Fyrre Magazine" fill className="object-contain invert" />
            </Link>

            <nav className="grid w-full grid-cols-1 gap-x-[1.5rem] gap-y-[2rem] sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((colIndex) => {
                // Lấy ra nhóm 3 link cho mỗi cột: (0-3, 3-6, 6-9)
                const chunk = FOOTER_LINKS.slice(colIndex * 3, colIndex * 3 + 3)
                // Nếu cột này không có link nào thì không render
                if (chunk.length === 0) return null

                return (
                  <div
                    key={colIndex}
                    className="border-border-inverse flex w-full flex-col items-start gap-[0.75rem] border-t pt-[1.5rem]"
                  >
                    {chunk.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-t-inverse py-[0.5rem] transition-opacity hover:opacity-60"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )
              })}
            </nav>
          </div>

          {/* copyright & socials */}
          <div className="flex w-full flex-col-reverse items-center justify-center gap-[1.5rem] border-t border-white/10 pt-[1.5rem] lg:flex-row lg:justify-between">
            <p className="t-small text-t-inverse/60 text-center lg:text-left">
              © Made by Pawel Gola - Powered by Webflow
            </p>

            <div className="flex items-center gap-[1rem]">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex size-[1.5rem] items-center justify-center transition-opacity hover:opacity-70"
                >
                  <item.Icon className="text-icon-inverse size-[1.25rem]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
