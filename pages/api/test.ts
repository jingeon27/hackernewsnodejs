import type { NextApiRequest, NextApiResponse } from "next";
import db from "../lib/db";

const test = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    db.query("select * from customers", (err: any, result: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result);
      }
    });
  } else {
    res.status(500);
  }
};
export default test;
