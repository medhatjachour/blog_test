import Post from "../components/Post";
import { PostInterface } from "@/types";

interface BlogPageProps {
  posts: PostInterface[];
}

const fetchData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const JsonResult = result.json();
  return { props: { JsonResult }, revalidate: 10 };
}; // Re-generate the page at most once every 10 seconds
async function getStaticProps() {
  const posts = await fetchData();
  return {
    props: { posts },
    revalidate: 10, // Re-generate the page at most once every 10 seconds
  }}
// ;

const BlogPage =async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const JsonResult = await result.json();
  return (
    <div className="mt-10 h-full">
      {JsonResult?.map((post: PostInterface) => (
        <div key={post.id} className="mb-4 my-6">
          <Post post={post} />
        </div>
      ))}
      ss
    </div>
  );
};

export default BlogPage;
