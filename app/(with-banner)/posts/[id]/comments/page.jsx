import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error("Error fetching comments");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const comments = await res.json();
  return comments;
};

export default async function CommentsPage({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: "#444", fontSize: "10px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            width={50}
            height={50}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
