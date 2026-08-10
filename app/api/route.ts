import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Enquiry API is working.",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, phone and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: {
          name,
          email,
          phone,
          subject: subject || "",
          message,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}