'use client'

import Button from '@/components/ui/button'
import { toast } from 'sonner'

const RootPage = () => {
  return (
    <div>
      RootPage
      <Button onClick={() => toast('Event has been created')}>Default</Button>
    </div>
  )
}

export default RootPage
