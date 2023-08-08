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

  return (
    <>
      <h1>Post Details Page</h1>
    </>
  )
}

// export const getStaticProps: GetStaticProps<PostDetailsProps> = async (context: GetStaticPropsContext) => {
//
//   // await new Promise((resolve) => setTimeout(resolve, 5000));
//
//   return {
//     props: {
//       post: {
//         id: '123-abc',
//         title: 'Minh Vo'
//       }
//     }
//   }
// }
//
// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async (context: GetStaticPathsContext) => {
//   return {
//     paths: [],
//     fallback: true
//   }
// }

