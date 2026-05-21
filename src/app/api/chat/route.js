import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the smart AI assistant of NapNest - the first premium Mobile Nap Hub in Hanoi, focusing on students and young professionals.
NapNest Details:
- Location: 144 Xuan Thuy, Cau Giay, Hanoi (inside the Vietnam National University campus).
- Pricing Model:
  + Base Package (first 2 hours): 69,000 VND flat.
  + Incremental hours: +15,000 VND/hour.
  + Example: 3h = 84,000 VND, 4h = 99,000 VND. Maximum booking cap: 12h = 219,000 VND.
- Premium Features:
  + Cozy natural Japanese Light Oak wood composite pods (clean, minimalist, non-gaming aesthetic).
  + Advanced acoustic shielding with sound dampening up to -35dB for complete silence.
  + Autonomous clinical-grade 60-second UV-C sterilization cycle executed automatically after every session.
  + Medical-grade HEPA-13 active airflow climate control (constant fresh air at 23°C).
  + Recessed bio-circadian LED lighting modes (Sunset Gold, Soft Reading, Mint Fresh, Zen Ceramic).
  + Relaxing natural soundtracks (Rain, Ocean waves, Forest wind) to help users fall asleep.
Answer politely, enthusiastically, and briefly in English. Help customers calculate prices or locate the hubs.`;

// Simple rule-based offline local agent when OpenAI API key is missing
function getLocalResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes("price") || msg.includes("cost") || msg.includes("how much") || msg.includes("fee") || msg.includes("rate") || msg.includes("giá")) {
    return "NapNest rates are highly affordable:\n- First 2 hours (Base package): 69,000 VND\n- Every subsequent hour: +15,000 VND/hour\nYou can select the duration directly on our dynamic slider to compute the exact total!";
  }
  
  if (msg.includes("address") || msg.includes("location") || msg.includes("where") || msg.includes("map") || msg.includes("địa chỉ")) {
    return "Our flagship Mobile Nap Hub is located at **144 Xuan Thuy, Cau Giay, Hanoi** (inside the campus of Vietnam National University). It is highly convenient for students and professionals to drop by for a quick rest!";
  }
  
  if (msg.includes("book") || msg.includes("reserve") || msg.includes("pod") || msg.includes("cabin") || msg.includes("order") || msg.includes("đặt")) {
    return "To reserve a cabin, simply select an available (green) pod on our Live Booking Grid map above, set your desired hours, and click 'Confirm Mock Payment & Unlock Pod'!";
  }
  
  if (msg.includes("feature") || msg.includes("clean") || msg.includes("noise") || msg.includes("quiet") || msg.includes("uv-c") || msg.includes("sanitize")) {
    return "NapNest cabins feature high-end -35dB acoustic noise isolation. Additionally, after each session, the cabin automatically seals and triggers a clinical 60-second UV-C sterilization cycle alongside continuous HEPA-13 air filtration, ensuring a clean, fresh space for every guest.";
  }
  
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("chào")) {
    return "Hello! I am your NapNest AI Assistant. How can I help you today? I can guide you through our hourly rates, location at Xuan Thuy, or cabin specs.";
  }

  return "Thank you for reaching out! NapNest is currently offline. If you have questions about our premium natural oak wood sleep cabins, rates (69k for 2h at VNU Hanoi), or sanitation cycles, please let me know!";
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "Missing messages parameter" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1].content;
    const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const modelName = process.env.OPENAI_MODEL || "gpt-5.4-mini"; // Fallback to gpt-5.4-mini as requested

    if (!apiKey) {
      // Return smart local response if no API key is provided
      const text = getLocalResponse(lastMessage);
      return NextResponse.json({
        choices: [{ message: { role: "assistant", content: text } }]
      });
    }

    const isReasoningModel = modelName.includes("gpt-5") || modelName.includes("o1") || modelName.includes("o3");
    
    const apiPayload = {
      model: modelName,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(m => ({ role: m.role, content: m.content }))
      ]
    };

    if (isReasoningModel) {
      apiPayload.max_completion_tokens = 500;
    } else {
      apiPayload.temperature = 0.7;
      apiPayload.max_tokens = 500;
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(apiPayload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI API error:", errText);
      // Fallback to offline rule engine on API failure
      const text = getLocalResponse(lastMessage);
      return NextResponse.json({
        choices: [{ message: { role: "assistant", content: text } }]
      });
    }

    const data = await response.json();
    const replyText = data.choices?.[0]?.message?.content || getLocalResponse(lastMessage);

    return NextResponse.json({
      choices: [{ message: { role: "assistant", content: replyText } }]
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
