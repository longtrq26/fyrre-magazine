import Button from '@/components/ui/button'
import { Marquee } from '@/components/ui/marquee'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-bg-primary flex w-full flex-col">
      {/* marquee */}
      <Marquee className="w-full py-[1rem] [--duration:30s] [--gap:1.5rem] md:py-[1.125rem] lg:py-[1.25rem]">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="text-t-inverse heading-4 uppercase">
            Newsletter+++
          </span>
        ))}
      </Marquee>

      <div className="flex w-full flex-col px-[1rem] pb-[1.5rem] md:px-[2rem] md:pb-[2rem] lg:px-[2.5rem] lg:pb-[3rem]">
        {/* newsletter */}
        <section className="flex w-full flex-col items-center justify-between gap-[2rem] py-[4rem] md:flex-row md:py-[6rem] lg:py-[8rem]">
          <p className="heading-medium text-t-inverse flex-1 uppercase md:text-[2.5rem] lg:text-[3rem]">
            Design News to your inbox
          </p>

          <form className="flex w-full flex-1 flex-col items-center justify-end gap-[0.75rem] md:flex-row">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email address"
              className="h-[3.125rem] w-full bg-white px-[0.938rem] text-black ring-white/50 outline-none focus:ring-1 md:max-w-[16rem] lg:max-w-[19.313rem]"
            />
            <Button className="bg-bg-default text-t-default h-[3.125rem] w-full transition-colors hover:bg-white/90 md:max-w-fit">
              Sign Up
            </Button>
          </form>
        </section>

        {/* bottom */}
        <div className="flex w-full flex-col gap-[3.5rem] md:gap-[5rem] lg:gap-[6rem]">
          {/* navigation */}
          <div className="flex flex-col items-start gap-[3rem] md:gap-[4rem] lg:flex-row lg:gap-[18.75rem]">
            <Link
              href="/"
              className="relative h-[0.875rem] w-[10rem] shrink-0 md:h-[1rem] md:w-[11.5rem] lg:h-[1.122rem] lg:w-[13.057rem]"
            >
              <Image src="/logo.svg" alt="Fyrre Magazine" fill className="object-contain invert" />
            </Link>

            <nav className="grid w-full grid-cols-1 gap-x-[1.5rem] gap-y-[2rem] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((colIndex) => {
                const chunk = FOOTER_LINKS.slice(colIndex * 3, colIndex * 3 + 3)
                if (chunk.length === 0) return null

                return (
                  <div
                    key={colIndex}
                    className="border-border-inverse flex w-full flex-col items-start gap-[0.5rem] border-t pt-[1.25rem] md:gap-[0.75rem] md:pt-[1.5rem]"
                  >
                    {chunk.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-t-inverse py-[0.25rem] transition-opacity hover:opacity-60 lg:py-[0.5rem]"
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
          <div className="flex w-full flex-col-reverse items-center justify-center gap-[1.5rem] border-t border-white/10 pt-[1.5rem] md:flex-row md:justify-between">
            <p className="t-small text-t-inverse/60 text-center md:text-left">
              © Made by Pawel Gola - Code by Long Tran Quang
            </p>

            <div className="flex items-center gap-[1rem] lg:gap-[1.25rem]">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
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
