import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
const io = new Server();
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("socket이 종료되었습니다.");
  });
  socket.on("client2server", (data) => {
    console.log(data);
  });
});
const sendMsgToClient = () => {
  setInterval(() => {
    io.emit("server2client", {
      code: `item${Math.random}`,
      price: Math.random(),
    });
  }, 1000);
};
const run = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      sendMsgToClient();
      res.send("메시지 전송 시작");
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default run;
