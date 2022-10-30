import type { NextApiRequest, NextApiResponse } from "next";
import db from "../lib/db";
import { sql } from "../mysql/sql";
const put = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const result = db.query(sql.customerUpdate, req.body.param);
    res.send(result);
  } else {
    res.status(405);
  }
};
export default put;
