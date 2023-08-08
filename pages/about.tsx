import { useRouter } from "next/router";

export default function AboutPage() {
  const router = useRouter();

  console.log('About query:', router.query)

  return <div>About Page</div>
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}
