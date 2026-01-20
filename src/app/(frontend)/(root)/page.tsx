'use client'

import Button from '@/components/ui/button'
import Label from '@/components/ui/label'
import { toast } from 'sonner'
import Hero from './_sections/hero'

const RootPage = () => {
  return (
    <div className="flex w-full flex-col px-[1rem] md:px-[2rem] lg:px-[2.5rem]">
      <Hero />
      RootPage
      <Button variant={'text'} direction={'left'} onClick={() => toast('Event has been created')}>
        Default
      </Button>
      <Label>Label</Label>
    </div>
  )
}

export default RootPage
