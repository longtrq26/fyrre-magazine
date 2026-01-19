import { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrWriter } from '../../access'
import { formatSlug } from '../../utilities/formatSlug'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: isAdminOrWriter,
    update: isAdminOrWriter,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
  ],
}
