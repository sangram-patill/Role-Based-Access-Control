const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "User", enum: ["Admin", "Moderator", "User"] }
});

module.exports = mongoose.model("User", userSchema);
