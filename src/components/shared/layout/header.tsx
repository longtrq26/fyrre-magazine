'use client'

import ICArrow from '@/components/icons/ICArrow'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useGSAP(
    () => {
      if (!line1Ref.current || !line2Ref.current) return

      // kill animation cũ để tránh race-condition khi click nhanh
      gsap.killTweensOf([line1Ref.current, line2Ref.current])

      if (isOpen) {
        // open state: transform thành dấu "X"
        gsap.to(line1Ref.current, {
          rotationZ: 45,
          y: 5,
          duration: 0.3,
          ease: 'power2.inOut',
          force3D: true, // gpu acceleration, mượt hơn trên mobile
        })

        gsap.to(line2Ref.current, {
          rotationZ: -45,
          y: -5,
          duration: 0.3,
          ease: 'power2.inOut',
          force3D: true,
        })
      } else {
        // closed state: trở lại hamburger
        gsap.to([line1Ref.current, line2Ref.current], {
          rotationZ: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          force3D: true,
        })
      }
    },
    {
      dependencies: [isOpen],
    },
  )

  return (
    <header className="border-border-default flex w-full items-center justify-between border-b pb-[1rem]">
      {/* logo */}
      <Link
        href={'/'}
        className="relative block h-[0.875rem] w-[10rem] md:h-[1.122rem] md:w-[13.073rem]"
      >
        <Image src={'/logo.svg'} alt="Fyrre Magazine" fill priority className="object-contain" />
      </Link>

      {/* desktop */}
      <div className="hidden items-center gap-[1.5rem] md:flex">
        {/* navigation */}
        <nav className="flex items-center gap-[1.5rem]">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="t-medium">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* separator */}
        <div className="bg-border-default h-px w-[0.938rem]" />

        {/* socials */}
        <div className="flex items-center gap-[0.75rem]">
          {SOCIAL_LINKS.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-label={item.label}
                className="flex size-[1.25rem] items-center justify-center"
              >
                <item.Icon className="fill-icon-default size-[1.042rem]" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <Drawer direction="bottom" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button className="flex h-[1.25rem] w-[1.75rem] flex-col items-end justify-center gap-[0.5rem]">
              <span
                ref={line1Ref}
                className="bg-border-default block h-[0.094rem] w-full origin-center will-change-transform"
                style={{ backfaceVisibility: 'hidden' }}
              ></span>
              <span
                ref={line2Ref}
                className="bg-border-default block h-[0.094rem] w-full origin-center will-change-transform"
                style={{ backfaceVisibility: 'hidden' }}
              ></span>
            </button>
          </DrawerTrigger>

          <DrawerContent className="flex flex-col p-[1.25rem_1.5rem]">
            <DrawerHeader className="sr-only">
              <DrawerTitle>Mobile Menu</DrawerTitle>
            </DrawerHeader>

            <nav className="mt-[2rem] flex flex-col gap-[1.5rem]">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="t-small border-border-default flex items-center justify-between border-b pb-[1rem] font-medium last:border-none last:pb-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label} <ICArrow className="fill-icon-default size-[0.875rem]" />
                </Link>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}

export default Header
