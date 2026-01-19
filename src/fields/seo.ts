import type { GroupField } from 'payload'

export const seoFields: GroupField = {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
      admin: {
        description: 'Recommended: 50-60 characters',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
      maxLength: 160,
      admin: {
        description: 'Recommended: 150-160 characters',
      },
    },
    {
      name: 'keywords',
      type: 'text',
      localized: true,
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Open Graph image for social sharing (1200x630px recommended)',
      },
    },
  ],
}
