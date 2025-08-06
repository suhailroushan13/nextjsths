import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import userModel from "@/models/User";

export async function GET() {
  try {
    await dbConnect();

    // GET all users

    const users = await userModel.find();
    // res.status(200).json(users)
    return NextResponse.json(users, { status: 200 });
    //or
    //   return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { email, name, phone, age, isAlive } = body;
    await userModel.create({ email, name, phone, age, isAlive });
    return NextResponse.json(
      { msg: "User Added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { id, name, email, phone, age, isAlive } = body;

    if (!id) {
      return NextResponse.json(
        { msg: "User ID is required to update" },
        { status: 400 }
      );
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        age,
        isAlive,
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { msg: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { msg: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { msg: "User ID is required to delete" },
        { status: 400 }
      );
    }

    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json(
        { msg: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: "User deleted successfully", user: deletedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { msg: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
