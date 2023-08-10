"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          key={650610777}
          name={"Natan bunkerd"}
          ID={"650610777"}
          posttext={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          pic={"/profileImages/NatanFace.jpg"}
          likeNum={100}
        />

        {/* Comment Example */}
        {comments.map((person) => (
          <Comment
            key={person.username}
            userImagePath={person.userImagePath}
            username={person.username}
            commentText={person.commentText}
            likeNum={person.likeNum}
            replies={person.replies}
          />
        ))}

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
