import mongoose from "mongoose";

const Main = async(req, res) =>{
    await mongoose.connect('mongodb+srv://dezynation:admin@cluster0.4e0ya7l.mongodb.net/slayitwithskin')
}

export default Main