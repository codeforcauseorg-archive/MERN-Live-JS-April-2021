import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import SimpleList from "../components/SimpleList";
import { io } from "socket.io-client";
import { UserContext } from "../App";
import AlignItemsList from "../components/AlignItemsList";

export default function Home() {
  let { user } = useContext(UserContext);

  let [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");
  let [activeUsers, setActiveUsers] = useState([]);
  let [socket, setSocket] = useState();

  useEffect(async function () {
    let token = await user.getIdToken(true);

    let sock = io("http://localhost:5000/", {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    sock.on("connect", function () {
      setSocket(sock);
    });

    sock.on("disconnect", function () {
      setSocket(null);
    });

    sock.on("active", function (payload) {
      console.log(payload);
      setActiveUsers(payload);
    });

    sock.on("broadcast", function (payload) {
      setMessages((old) => {
        let copy = [...old];
        copy.push(payload);
        return copy;
      });
    });
  }, []);

  return (
    <Box
      display="flex"
      style={{
        flexGrow: 1,
      }}
    >
      <AlignItemsList contacts={activeUsers} />

      <Box flexGrow={1}>
        <Box
          style={{
            justifySelf: "flex-end",
            display: "flex",
            margin: "16px",
          }}
        >
          <TextField
            id="outlined-basic"
            style={{
              flexGrow: 1,
              marginRight: "16px",
            }}
            variant="outlined"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button
            disabled={!socket}
            onClick={function () {
              socket.emit("message", {
                content: message,
              });

              setMessage("");
            }}
          >
            Send
          </Button>
        </Box>

        <SimpleList messages={messages} />
      </Box>
    </Box>
  );
}
