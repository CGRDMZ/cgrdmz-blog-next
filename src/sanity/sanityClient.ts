import SanityClient from "@sanity/client";


const sanityClient = new SanityClient({
  projectId: "9ti3zf0y",
  token: process.env.SANITY_TOKEN,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
});


export default sanityClient;
