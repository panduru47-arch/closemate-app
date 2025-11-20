import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message, leadName } = await request.json();

    // Simulăm un răspuns AI (momentan)
    const aiResponse = `🤖 Salut ${leadName}! 

Am văzut mesajul tău: "${message}"

Aș dori să te ajut cu informații despre serviciile noastre. Ce anume te interesează cel mai mult?

Cu stimă,
Echipa Closemate AI`;

    return NextResponse.json({ 
      success: true, 
      response: aiResponse 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'A apărut o eroare' 
    }, { status: 500 });
  }
}
