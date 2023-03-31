import Main from "../../config/connection";
import { CouponModel } from "../../config/schema";

export default async function couponHandler(req, res) {
    await Main()
    const result = CouponModel.create({
        code: "TEST",
        value: 50,
        type: "flat"
    })
    if(!result){
        return res.status(400).json({message: "Coupon not found!"})
    }
    res.status(200).json(result)
}