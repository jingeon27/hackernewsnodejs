import type { NextApiRequest, NextApiResponse } from "next";
import db from "../lib/db";
const post = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const result = db.query("insert into customers set ?", req.body.param);
    res.send(result);
  } else {
    res.status(500);
  }
};
export default post;
