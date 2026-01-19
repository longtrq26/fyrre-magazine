import type { CollectionConfig } from 'payload'
import { isAdminOrWriter, isAdminOrOwner } from '../../access'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 240,
        height: 240,
        position: 'centre',
      },
      {
        name: 'card',
        width: 303,
        height: 303,
        position: 'centre',
      },
      {
        name: 'featured',
        width: 1200,
        height: 630,
        position: 'centre',
      },
    ],
  },
  access: {
    read: () => true,
    create: isAdminOrWriter,
    update: isAdminOrOwner('owner'),
    delete: isAdminOrOwner('owner'),
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ user }) => user?.id,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}
