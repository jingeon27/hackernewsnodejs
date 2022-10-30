import type { NextApiRequest, NextApiResponse } from "next";
import db from "../lib/db";
import { sql } from "../mysql/sql";
const test = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    db.query(sql.customersList, (err: any, result: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result);
      }
    });
  } else {
    res.status(405);
  }
};
export default test;
