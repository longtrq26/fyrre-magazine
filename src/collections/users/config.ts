import { generateVerifyEmailHtml } from '@/utilities/generateEmailTemplate'
import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminFieldLevel, isAdminOrSelf } from '../../access'
import { ROLE_OPTIONS, ROLES } from '../../constants/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 3600, // 1 hour
    verify: {
      generateEmailHTML: ({ token, user }) => {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verify-email?token=${token}`
        return generateVerifyEmailHtml(url, user.email)
      },
    },
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // 10 minutes
    cookies: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
    },
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    read: isAdminOrSelf,
    create: () => true,
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
        create: isAdminFieldLevel,
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
  ],
}
