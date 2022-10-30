import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";
import { sql } from "../../mysql/sql";
const test = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const id = req.query.id;
    const result = db.query(sql.customerDelete, id);
    res.status(200).json(result);
    return;
  } else {
    res.status(405);
    return;
  }
};
export default test;
