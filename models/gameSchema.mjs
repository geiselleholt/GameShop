import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  category: {
    type: String,
    required: true,
    enum: ["Board", "Card", "Dice", "Outdoor", "Video", "Other"],
  },
  price: { type: Number, required: true },
  desc: { type: String },
  qty: { type: Number, required: true },
  img: { type: String, required: true },
});

export default mongoose.model("Game", gameSchema);
