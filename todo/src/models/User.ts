import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  age: number;
  isAlive: boolean;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  isAlive: { type: Boolean, required: true },
});

const userModel =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default userModel;
