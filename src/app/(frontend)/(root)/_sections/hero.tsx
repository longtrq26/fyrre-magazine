import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="mt-[3.125rem] flex w-full flex-col pt-[2rem] md:mt-[4.5rem] lg:mt-0">
      {/* slogan */}
      <div className="w-full">
        <Image
          src="/root-slogan.svg"
          alt="Art & Life"
          width={1520}
          height={215.29}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* news ticker */}
      <div className="bg-bg-primary mt-[1.25rem] flex w-full items-center gap-[1rem] p-[0.75rem_0_0.75rem_0.75rem] md:mt-[1.75rem] md:gap-[1.25rem] md:p-[1.125rem_0_1.125rem_1.125rem] lg:mt-[2rem] lg:gap-[1.5rem] lg:p-[1.25rem_0_1.25rem_1.25rem]">
        <p className="text-t-inverse heading-4 hidden shrink-0 !text-[1.125rem] whitespace-nowrap uppercase md:block">
          News Ticker+++
        </p>
        <p className="text-t-inverse heading-6 shrink-0 whitespace-nowrap uppercase md:hidden">
          News +++
        </p>
        <Marquee className="w-full [--duration:60s] [--gap:1.5rem] md:[--gap:2rem]">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="font-general-sans text-t-inverse t-small md:t-default">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Hero
