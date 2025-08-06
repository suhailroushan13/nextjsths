import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import userModel from '@/models/User';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const id = req.nextUrl.pathname.split('/').pop(); // Get ID from URL

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const user = await userModel.findById(id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
