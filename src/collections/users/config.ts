import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminFieldLevel, isAdminOrSelf } from '../../access'
import { ROLE_OPTIONS, ROLES } from '../../constants/roles'
import { formatSlug } from '../../utilities/formatSlug'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    read: () => true, // Still public for author profile visibility, but sensitive fields masked by Payload
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
    admin: ({ req: { user } }) => {
      return Boolean(user?.role === ROLES.ADMIN || user?.role === ROLES.WRITER)
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: ROLES.USER,
      options: ROLE_OPTIONS,
      access: {
        update: isAdminFieldLevel, // Only admins can change roles
      },
    },
    {
      name: 'bio',
      type: 'text',
      localized: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          type: 'text',
        },
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL-friendly identifier for author profile page',
      },
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
  ],
}
