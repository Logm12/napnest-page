import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Bạn là trợ lý AI thông minh của NapNest - mô hình trạm ngủ thông minh (Mobile Nap Hub) đầu tiên tại Hà Nội, đặc biệt hướng tới sinh viên và nhân viên văn phòng.
Thông tin chi tiết về NapNest:
- Địa điểm: 144 Xuân Thủy, Cầu Giấy, Hà Nội (nằm trong khuôn viên Đại học Quốc gia Hà Nội).
- Bảng giá thuê cabin:
  + Gói cơ bản (2 giờ đầu): 69.000 VND.
  + Mỗi giờ tiếp theo: +15.000 VND/giờ.
  + Ví dụ: 3 giờ = 84.000 VND, 4 giờ = 99.000 VND. Tối đa là 12 giờ (219.000 VND).
- Tính năng nổi bật:
  + Vỏ cabin bằng gỗ sồi tự nhiên ấm áp, thiết kế tối giản kiểu Nhật Bản sang trọng (không mang tính gaming).
  + Khả năng cách âm vượt trội (-35dB), chống ồn tuyệt đối.
  + Hệ thống khử khuẩn tự động bằng tia UV-C trong 60 giây sau mỗi phiên sử dụng.
  + Điều hòa không khí có màng lọc HEPA cấp lâm sàng.
  + Đèn LED ánh sáng ấm điều chỉnh theo nhịp sinh học (đèn đọc sách, chế độ thư giãn).
  + Loa Bluetooth phát âm thanh tự nhiên (tiếng mưa rơi, sóng biển, gió rừng) giúp dễ đi vào giấc ngủ.
Hãy trả lời ngắn gọn, nhiệt tình, lịch sự và bằng tiếng Việt để tư vấn cho khách hàng cách đặt chỗ và các tiện ích.`;

// A simple rule-based local agent when Gemini API key is missing
function getLocalResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes("giá") || msg.includes("bao nhiêu") || msg.includes("tiền") || msg.includes("phí") || msg.includes("price")) {
    return "Dạ, NapNest có mức giá cực kỳ tiết kiệm cho sinh viên và người đi làm ạ:\n- 2 giờ đầu (gói cơ bản): 69.000đ\n- Mỗi giờ tiếp theo: +15.000đ/giờ\nBạn có thể chọn thời lượng trực tiếp trên trang web để hệ thống tính toán chính xác nhất nhé!";
  }
  
  if (msg.includes("địa chỉ") || msg.includes("ở đâu") || msg.includes("địa điểm") || msg.includes("location") || msg.includes("address")) {
    return "Trạm ngủ thông minh NapNest hiện tại tọa lạc tại **144 Xuân Thủy, Cầu Giấy, Hà Nội** (ngay bên trong khuôn viên Đại học Quốc gia Hà Nội). Rất thuận tiện để các bạn sinh viên và nhân viên văn phòng ghé nghỉ ngơi buổi trưa ạ!";
  }
  
  if (msg.includes("đặt") || msg.includes("book") || msg.includes("phòng") || msg.includes("cabin") || msg.includes("chỗ")) {
    return "Để đặt cabin ngủ, bạn chỉ cần chọn một cabin còn trống (màu xanh lá) trên Bản đồ đặt phòng trực tuyến của chúng tôi ngay trên website này, chọn thời gian mong muốn và nhấn 'Xác nhận thanh toán' là xong ạ!";
  }
  
  if (msg.includes("tính năng") || msg.includes("tiện ích") || msg.includes("sạch") || msg.includes("ồn") || msg.includes("khử khuẩn") || msg.includes("uvc")) {
    return "Cabin NapNest được trang bị hệ thống cách âm cao cấp -35dB giúp bạn yên tĩnh tuyệt đối. Ngoài ra, sau mỗi lượt khách, cabin sẽ tự động kích hoạt chu trình khử khuẩn UV-C lâm sàng trong 60 giây và hệ thống lọc khí HEPA liên tục, đảm bảo không gian luôn sạch sẽ và thơm tho nhất!";
  }
  
  if (msg.includes("chào") || msg.includes("hello") || msg.includes("hi") || msg.includes("xin chào")) {
    return "Xin chào! Mình là trợ lý thông minh của NapNest. Bạn cần mình tư vấn về bảng giá phòng, địa điểm tại Xuân Thủy hay các tiện ích của cabin ngủ gỗ sồi ấm áp ạ?";
  }

  return "Dạ, NapNest xin ghi nhận câu hỏi của bạn. Hiện tại hệ thống đang kết nối trực tuyến, bạn có câu hỏi nào về dịch vụ trạm ngủ thông minh cách âm, giá thuê 69k/2h tại 144 Xuân Thủy không ạ? Mình rất sẵn lòng hỗ trợ!";
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "Missing messages parameter" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1].content;
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      // Return smart local response if no API key is provided yet
      const text = getLocalResponse(lastMessage);
      return NextResponse.json({
        choices: [{ message: { role: "assistant", content: text } }]
      });
    }

    // Call Google Gemini API (using generative AI model gemini-2.5-flash style REST API call)
    // endpoint: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_KEY
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: `${SYSTEM_PROMPT}\n\nLịch sử trò chuyện:\n${messages.map(m => `${m.role === "user" ? "Khách" : "Trợ lý"}: ${m.content}`).join("\n")}\n\nKhách: ${lastMessage}\nTrợ lý:` }] }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      // Fallback if API call fails
      const text = getLocalResponse(lastMessage);
      return NextResponse.json({
        choices: [{ message: { role: "assistant", content: text } }]
      });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || getLocalResponse(lastMessage);

    return NextResponse.json({
      choices: [{ message: { role: "assistant", content: replyText } }]
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
