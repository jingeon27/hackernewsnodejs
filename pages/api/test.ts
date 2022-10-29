import type { NextApiRequest, NextApiResponse } from "next";
import db from "../lib/db";

const test = (req: NextApiRequest, res: NextApiResponse) => {
  db.query("SELECT * FROM customers", (err: any, result: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
};
export default test;
