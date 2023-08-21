import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    family_name: {
        type: String,
        required: false,
    },
    given_name: {
        type: String,
        required: false,
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    picture: {
        type: String,
        required: false,
    },
    saved_fish: {
        type: [String],
        default: [],
    },
});

const User = mongoose.model("User", userSchema);
export default User;