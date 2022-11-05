const fetchSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const post = await res.json();
  return post;
};

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
