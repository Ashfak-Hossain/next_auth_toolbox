import { NextRequest, userAgent } from 'next/server';

export async function GET(request: NextRequest) {
  const { os, cpu, isBot, ua, browser, device, engine } = userAgent(request);

  return Response.json({
    os,
    cpu,
    isBot,
    ua,
    browser,
    device,
    engine,
  });
}
