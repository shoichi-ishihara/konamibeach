import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nameKanji, nameKana, email, content } = body;

        // Validation
        if (!nameKanji || !nameKana || !email || !content) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: '【小波海水浴場】お問い合わせ',
            text: `
以下の内容でお問い合わせがありました。

お名前 (漢字): ${nameKanji}
お名前 (カナ): ${nameKana}
メールアドレス: ${email}

お問い合わせ内容:
${content}
            `,
            html: `
<h2>お問い合わせ</h2>
<p>以下の内容でお問い合わせがありました。</p>
<ul>
    <li><strong>お名前 (漢字):</strong> ${nameKanji}</li>
    <li><strong>お名前 (カナ):</strong> ${nameKana}</li>
    <li><strong>メールアドレス:</strong> ${email}</li>
</ul>
<h3>お問い合わせ内容</h3>
<p style="white-space: pre-wrap;">${content}</p>
            `,
        };

        // Send email
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log('Mocking email send (no credentials provided):', mailOptions);
        }

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
