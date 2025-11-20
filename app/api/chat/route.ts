import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message, leadName } = await request.json();

    // ✅ ENGLISH for international market
    const aiResponse = `🤖 Hello ${leadName}! 

I saw your message: "${message}"

I'd love to help you with information about our services. What specifically interests you the most?

I'm here to answer any questions you have and provide you with the best solutions for your needs.

Looking forward to helping you!

Best regards,
The Closemate AI Team`;

    return NextResponse.json({ 
      success: true, 
      response: aiResponse 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'An error occurred' 
    }, { status: 500 });
  }
}
