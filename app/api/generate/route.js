import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST() {
  try {
    const clientName = "Tech Startup";
    const task = "Reddit Community Infiltration";

    if (!clientName || !task) {
      return NextResponse.json({ error: 'Client name and task are required.' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are Josh W., a friendly and successful marketing consultant. A client named "${clientName}" is behind schedule on the task: "${task}". Write a short, encouraging message (2-3 sentences) that reminds them of the task's importance and offers a premium 'audit session' to get them unstuck. Keep it professional but approachable. Sign off as "Josh".`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ prompt: text });
  } catch (error) {
    console.error('Error in generate API route:', error);
    const errorMessage = error.message || 'An unknown error occurred.';
    return NextResponse.json({ error: `Failed to generate AI prompt: ${errorMessage}` }, { status: 500 });
  }
}