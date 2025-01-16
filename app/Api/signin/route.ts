import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST( req : NextRequest) {

    let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

    const username = body.username;
    const password = body.password;

    const userId = 1;
    const token = jwt.sign({
        userId
    },"SECRET");

    return NextResponse.json({
        token
    })
}