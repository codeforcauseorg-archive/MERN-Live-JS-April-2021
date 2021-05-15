import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import SimpleList from "../components/SimpleList";
import { io } from "socket.io-client";
import { UserContext } from "../App";

export default function Home() {

  let {user} = useContext(UserContext);

  let [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");
  let [socket, setSocket] = useState();

  useEffect(function () {
    let sock = io("http://localhost:5000/");

    sock.on("connect", function () {
      setSocket(sock);
    });

    sock.on("disconnect", function () {
      setSocket(null);
    });

    sock.on("broadcast", function (payload) {
      setMessages((old)=>{
        let copy = [...old];
        copy.push(payload);
        return copy;
      })
    });
  }, []);

  return (
    <div>
      <Box
        style={{
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
              sender: user.displayName
            });

            setMessage("");
          }}
        >
          Send
        </Button>
      </Box>
      <SimpleList messages={messages} />
    </div>
  );
}
