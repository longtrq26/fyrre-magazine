import { generateBlurHashUrl, isEligibleForBlurHashUrl } from '@/utilities/generateBlurHashUrl'
import type { CollectionConfig } from 'payload'
import { isAdminOrOwner, isAdminOrWriter } from '../../access'

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
      name: 'blurHashUrl',
      type: 'text',
      required: true,
      admin: { hidden: true },
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
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        // 1. kiểm tra data có tồn tại và operation là create (chỉ chạy khi khởi tạo)
        if (!data || operation !== 'create') return data

        // 2. lấy file từ request
        const file = req.file
        // kiểm tra file và loại file hợp lệ
        if (!file || !isEligibleForBlurHashUrl(file.mimetype)) {
          return data
        }

        try {
          // 3. tạo blurhash url từ buffer của file
          const base64 = await generateBlurHashUrl(file.data)
          if (base64) {
            // gán giá trị blurhash url vào field blurHashUrl
            data.blurHashUrl = base64
            req.payload.logger.info({
              msg: 'Generated blurhash success',
              file: file.name,
            })
          }
        } catch (error) {
          req.payload.logger.error({
            msg: 'Failed to generate blurhash',
            error,
            file: file.name,
          })
        }

        return data
      },
    ],
  },
}
