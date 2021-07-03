import SanityClient from "@sanity/client";

const sanityClient = new SanityClient({
  projectId: "9ti3zf0y",
  dataset: "development",
  useCdn: false,
})

export default sanityClient;