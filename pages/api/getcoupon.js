import Main from "../../config/connection";
import { CouponModel } from "../../config/schema";

export default async function couponHandler(req, res) {
    await Main()
    const result = CouponModel.find({})
    if(!result){
        return res.status(400).json({message: "Coupon not found!"})
    }
    return res.status(200).json(result)
}