import { createOpenAI, openai } from '@ai-sdk/openai';
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { NextResponse } from 'next/server';


const customOpenAI = createOpenAI({
    baseURL:"https://api.apimart.ai/v1",
    apiKey:process.env.APIKEY,
})
console.log('API Key:',process.env.APIKEY);
export const maxDuration = 30;

// 允许流式响应最多30s
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  //1. 检查API key
  if (!process.env.APIKEY){
    return NextResponse.json({ error:"APIKEY not set in environment."},{ status: 500});
  }

  try{
  //2.使用自定义的客户端调用 streamText
  const result = streamText({
    model: customOpenAI('gpt-4o'),
    //转换消息思路
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
} catch (error){
    console.error('Error in chat completion route:',error);
    return NextResponse.json({error:"Failed to process chat completion request with custom API."},{ status: 500});
    }
}