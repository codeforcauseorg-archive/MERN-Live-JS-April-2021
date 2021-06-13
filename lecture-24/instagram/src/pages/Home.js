import { Box } from "@material-ui/core";
import PostCard from "../components/PostCard";
import firebase from "../utils/firebase";
import List from "@material-ui/core/List";

export default function Home() {
  return (
    <List
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </List>
  );
}
