import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";

export type PostsPageProps = {
  posts: { id: string; title: string }[]
}

export default function PostsPage({ posts }: PostsPageProps) {

  return (
    <>
      <h1>Posts Page</h1>
      <ul>
        { posts.map(post => {
          return (
            <li key={ post.id }>
              <Link href={ `/posts/${post.id}` }>
                { post.title }
              </Link>
            </li>
          )
        }) }
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  //This function scope in the server-side
  //And it will execute at the build time

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    props: {
      posts: data.data
    }
  }
}
