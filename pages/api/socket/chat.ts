import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/res";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "POST") {
    // get message
    const message = req.body;

    // dispatch to channel "message"
    res.socket.server.io.emit("message", message);

    // return message
    res.status(201).json(message);
  }
};
