import TestData from "@/app/(models)/testdata";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const allData = body.testData;
    await TestData.create(allData);

    return NextResponse.json(
      { message: "all data created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const testdata = await TestData.find();
    return NextResponse.json({ testdata }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
