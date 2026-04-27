import { GoogleGenerativeAI } from "@google/generative-ai";

// ئەگەر کلیلی APIـەکەت لایە لێرە دایبنێ، یان لە Vercel ڕێکی بخە
const genAI = new GoogleGenerativeAI("لێرە_کلیلی_خۆت_دابنێ");

export async function generateQuiz(topic: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Create a 5-question multiple choice quiz about ${topic} in Kurdish (Sorani). 
    Return the response as a JSON array of objects with 'question', 'options' (array), and 'correctAnswer' (index).`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text());
  } catch (error) {
    console.error("هەڵە لە وەرگرتنی پرسیارەکان:", error);
    return null;
  }
}
