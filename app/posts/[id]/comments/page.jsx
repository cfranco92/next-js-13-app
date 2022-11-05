const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

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

export default async function PostPage({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: "#444", fontSize: "10px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
