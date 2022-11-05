import { LikeButton } from "./LikeButton";
import Link from "next/link";

const fetchPosts = async () => {
  // STATIC PROPS - getStaticProps
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  // SERVER SIDE RENDERING - getServerSideProps
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //     cache: "no-store",
  //   });

  // INCREMENTAL STATIC REGENERATION
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();
  return data;
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
