import SanityClient from "@sanity/client";


const sanityClient = new SanityClient({
  projectId: "9ti3zf0y",
  token: process.env.SANITY_TOKEN,
  dataset: process.env.NODE_ENV == "production" ? "production" : "development",
  useCdn: false,
});


export default sanityClient;
