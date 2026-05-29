import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      company: body.company || '',
      phone: body.phone || '',
      message,
      timestamp: new Date().toISOString(),
    });

    return Response.json({ success: true, message: 'Message received successfully.' });
  } catch {
    return Response.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
