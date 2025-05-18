import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
// import { useRouter } from "next/router";

// Dynamically generated (SSR)
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

// This is how we could do SSG:
// getStaticPaths + getStaticProps

function Cabin({ cabin }) {
  // const router = useRouter();
  console.log(cabin);

  return (
    <>
      <Head>
        {/* <title>Cabin #{router.query.cabinId} | The wild oasis</title> */}
        <title>Cabin {cabin.name} | The wild oasis</title>
      </Head>

      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
