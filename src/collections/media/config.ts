import type { CollectionConfig } from 'payload'
import { isAdminOrWriter } from '../../access'

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
    update: isAdminOrWriter,
    delete: isAdminOrWriter,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
