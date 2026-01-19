export type Role = 'admin' | 'writer' | 'user'

export const ROLES = {
  ADMIN: 'admin' as Role,
  WRITER: 'writer' as Role,
  USER: 'user' as Role,
}

export const ROLE_OPTIONS = [
  { label: 'Admin', value: ROLES.ADMIN },
  { label: 'Writer', value: ROLES.WRITER },
  { label: 'User', value: ROLES.USER },
]
