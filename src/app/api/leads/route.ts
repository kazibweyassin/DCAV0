import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LeadPayload {
  trigger: "brief" | "allocation";
  investorName: string;
  email: string;
  countryOfOrigin: string;
  assetClassInterest: string;
  liquidityCapacity: string;
  accreditationsConfirmed: boolean;
}

function validatePayload(body: unknown): LeadPayload | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;

  if (data.trigger !== "brief" && data.trigger !== "allocation") return null;
  if (typeof data.investorName !== "string" || !data.investorName.trim())
    return null;
  if (typeof data.email !== "string" || !EMAIL_REGEX.test(data.email)) return null;
  if (typeof data.countryOfOrigin !== "string" || !data.countryOfOrigin)
    return null;
  if (typeof data.assetClassInterest !== "string" || !data.assetClassInterest)
    return null;
  if (typeof data.liquidityCapacity !== "string" || !data.liquidityCapacity)
    return null;
  if (data.accreditationsConfirmed !== true) return null;

  return {
    trigger: data.trigger,
    investorName: data.investorName.trim(),
    email: data.email.trim().toLowerCase(),
    countryOfOrigin: data.countryOfOrigin,
    assetClassInterest: data.assetClassInterest,
    liquidityCapacity: data.liquidityCapacity,
    accreditationsConfirmed: true,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = validatePayload(body);

    if (!payload) {
      return NextResponse.json(
        { error: "Invalid submission. Please check all required fields." },
        { status: 400 }
      );
    }

    const record = {
      ...payload,
      submittedAt: new Date().toISOString(),
    };

    const dataDir = path.join(process.cwd(), ".data");
    await mkdir(dataDir, { recursive: true });
    const filePath = path.join(dataDir, "leads.jsonl");
    await writeFile(filePath, `${JSON.stringify(record)}\n`, { flag: "a" });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process submission. Please try again." },
      { status: 500 }
    );
  }
}