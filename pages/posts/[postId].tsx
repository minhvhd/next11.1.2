import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";

type Post = {
  id: string;
  title: string;
}

type PostDetailsProps = {
  post: Post
}

export default function PostDetailsPage({ post }: PostDetailsProps) {
  const router = useRouter();

  if (!post) return null;

  return (
    <>
      <h1>Post Details Page</h1>
      <p>{ post.title }</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<{ postId: string }> = async (context: GetStaticPathsContext) => {

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({
      params: { postId: post.id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostDetailsProps> = async (context: GetStaticPropsContext) => {

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const postId = context.params?.postId;

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${ postId }`);

  const data = await response.json();

  return {
    props: {
      post: data
    }
  }
}


