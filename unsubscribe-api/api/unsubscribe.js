export default function handler(req, res) {
    // 1. 从 URL 抓取 email 参数
    const { email } = req.query;
  
    if (!email) {
      return res.status(400).send('无效的请求：缺少邮箱参数');
    }
  
    // 2. 记录退订用户：打印到 Vercel 运行日志中
    console.log(`[退订记录] 用户已点击退订: ${email}`);
  
    // 3. 返回给用户的网页，告诉他们退订成功
    const html = `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>退订成功</title>
      </head>
      <body style="text-align: center; padding-top: 50px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f8fa;">
        <h2 style="color: #333333;">退订成功</h2>
        <p style="color: #666666; font-size: 16px;">您好，邮箱 <b style="color: #398cfe;">${email}</b> 已成功从我们的通知列表中移除。</p>
        <p style="color: #666666; font-size: 14px;">您后续将不会再收到此类邮件，感谢您的支持。</p>
      </body>
      </html>
    `;
  
    // 发送网页响应
    res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(html);
  }