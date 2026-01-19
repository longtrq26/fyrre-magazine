import type { Access, FieldAccess } from 'payload'
import { ROLES } from '../constants/roles'

// Admin only
export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.role === ROLES.ADMIN)
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return Boolean(user?.role === ROLES.ADMIN)
}

// Admin or Writer
export const isAdminOrWriter: Access = ({ req: { user } }) => {
  return Boolean(user?.role === ROLES.ADMIN || user?.role === ROLES.WRITER)
}

// Admin or Self (for Users collection)
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.role === ROLES.ADMIN) return true

  return {
    id: {
      equals: user.id,
    },
  }
}

// Admin or Owner (for collections with author/user field)
export const isAdminOrOwner =
  (fieldName: string = 'author'): Access =>
  ({ req: { user } }) => {
    if (!user) return false
    if (user.role === ROLES.ADMIN) return true

    return {
      [fieldName]: {
        equals: user.id,
      },
    }
  }

export const isAdminOrSelfFieldLevel: FieldAccess = ({ req: { user }, id }) => {
  if (!user) return false
  if (user.role === ROLES.ADMIN) return true
  return user.id === id
}
