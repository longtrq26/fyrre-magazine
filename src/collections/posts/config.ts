import { CollectionConfig, Where } from 'payload'
import { ROLES } from '../../constants/roles'
import { isAdminOrWriter, isAdminOrOwner } from '../../access'
import { seoFields } from '../../fields/seo'
import { formatSlug } from '../../utilities/formatSlug'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'status', 'publishedAt'],
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === ROLES.ADMIN) return true

      const publishedFilter: Where = {
        status: {
          equals: 'published',
        },
      }

      if (!user) return publishedFilter

      return {
        or: [
          publishedFilter,
          {
            author: {
              equals: user.id,
            },
          },
        ],
      }
    },
    create: isAdminOrWriter,
    update: isAdminOrOwner('author'),
    delete: isAdminOrOwner('author'),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'article',
      options: [
        { label: 'Article', value: 'article' },
        { label: 'Podcast', value: 'podcast' },
      ],
    },
    {
      name: 'podcastUrl',
      type: 'text',
      admin: {
        condition: (data) => data.type === 'podcast',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      localized: true,
      maxLength: 200,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ user }) => user?.id,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'In Review', value: 'review' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        condition: (data) => data.status === 'published',
      },
    },
    seoFields,
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data.status === 'published' && !data.publishedAt) {
            data.publishedAt = new Date()
          }
        }
        return data
      },
    ],
  },
}
