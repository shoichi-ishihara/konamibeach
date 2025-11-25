import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nameKanji, nameKana, address, phone, email } = body;

        // Basic validation
        if (!nameKanji || !nameKana || !address || !phone || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        // NOTE: These environment variables need to be set in .env.local
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or your preferred service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Send to self/admin
            subject: '【小波キャンプ場】予約リクエスト',
            text: `
以下の内容で予約リクエストがありました。

お名前 (漢字): ${nameKanji}
お名前 (カナ): ${nameKana}
住所: ${address}
電話番号: ${phone}
メールアドレス: ${email}
            `,
            html: `
<h2>予約リクエスト</h2>
<p>以下の内容で予約リクエストがありました。</p>
<ul>
    <li><strong>お名前 (漢字):</strong> ${nameKanji}</li>
    <li><strong>お名前 (カナ):</strong> ${nameKana}</li>
    <li><strong>住所:</strong> ${address}</li>
    <li><strong>電話番号:</strong> ${phone}</li>
    <li><strong>メールアドレス:</strong> ${email}</li>
</ul>
            `,
        };

        // Send email
        // Only attempt to send if credentials are present, otherwise mock success for dev
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log('Mocking email send (no credentials provided):', mailOptions);
        }

        return NextResponse.json({ message: 'Reservation sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
