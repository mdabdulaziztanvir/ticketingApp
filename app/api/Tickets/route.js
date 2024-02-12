import Ticket from "../../(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    // await ticketData.create(ticketData);
    return NextResponse.json(
      { message: "ticket create successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
