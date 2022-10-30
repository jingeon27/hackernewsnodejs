import type { NextApiRequest, NextApiResponse } from "next";
import db from "../lib/db";
import { sql } from "../mysql/sql";
const post = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const result = db.query(sql.customerInsert, req.body.param);
    res.status(200).json(result);
  } else {
    res.status(405);
  }
};
export default post;
