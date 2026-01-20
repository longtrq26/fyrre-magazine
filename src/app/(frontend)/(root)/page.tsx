'use client'

import Button from '@/components/ui/button'
import Label from '@/components/ui/label'
import { toast } from 'sonner'

const RootPage = () => {
  return (
    <div>
      RootPage
      <Button variant={'text'} direction={'left'} onClick={() => toast('Event has been created')}>
        Default
      </Button>
      <Label>Label</Label>
    </div>
  )
}

export default RootPage
