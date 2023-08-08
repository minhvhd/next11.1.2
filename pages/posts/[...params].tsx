import { useRouter } from "next/router";

export default function PostsParamsPage() {
  const router = useRouter();

  return (
    <>
      <h1>Post Params Page</h1>
      <p>Query: { JSON.stringify(router.query) }</p>
    </>
  )
}
