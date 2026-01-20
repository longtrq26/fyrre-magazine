import { getPlaiceholder } from 'plaiceholder'

// hàm kiểm tra xem file có hợp lệ không
export function isEligibleForBlurHashUrl(mime?: string | null): boolean {
  // nếu không phải là file image thì không hợp lệ
  if (!mime?.startsWith('image/')) return false

  // nếu là file svg thì không hợp lệ
  if (mime === 'image/svg+xml') return false

  return true
}

// hàm tạo blurhash url
export async function generateBlurHashUrl(buffer: Buffer<ArrayBufferLike>): Promise<string | null> {
  // nếu không có buffer thì không hợp lệ
  if (!buffer) {
    console.warn('No buffer provided')
    return null
  }

  // tạo blurhash url
  const { base64 } = await getPlaiceholder(buffer)

  return base64
}
