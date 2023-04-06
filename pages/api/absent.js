// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Main from "../../config/connection";
import { AbsentModel } from "../../config/schema";
const date = new Date()

export default async function absentHandler(req, res) {
  await Main()
  if (req.method == "GET") {
    let result = await AbsentModel.find()
    if (!result) {
      return res.status(204).json({ message: "No data found" })
    }
    if (result) {
      return res.status(200).json(result)
    }
  }
  else {
    res.status(403).json({ message: "Method not supported" })
  }
}
