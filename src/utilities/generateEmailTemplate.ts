export const generateVerifyEmailHtml = (url: string, userEmail: string) => {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333;">Verify Your Account</h2>
      <p>Hello <strong>${userEmail}</strong>,</p>
      <p>Thank you for signing up. Please click the button below to activate your account:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="background-color: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
          Verify Email
        </a>
      </div>
      <p style="font-size: 12px; color: #666;">
        If the button above does not work, you can copy and paste this link into your browser: <br/>
        <a href="${url}">${url}</a>
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">This is an automated email. Please do not reply.</p>
    </div>
  `
}
