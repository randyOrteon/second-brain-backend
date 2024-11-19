import mongoose, { mongo, Types } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const contentTypes = ["image", "video", "audio", "article"];

const contentSchema = new Schema({
  title: { type: String, require: true },
  type: { type: String, enum: contentTypes, require: true },
  link: { type: String, require: true },
  tags: [{ type: Types.ObjectId, ref: "tag" }],
  userId: { type: Types.ObjectId, ref: "user", require: true },
});

export const ContentModel = mongoose.model("content", contentSchema);

export const UserModel = mongoose.model("user", userSchema);
