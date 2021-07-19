export const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";

// log the pageview with their URL
export const pageview = (url: URL) => {
  if (process.env.NODE_ENV !== "production") return;
  window.gtag("config", ga_id, {page_path: url})
}

// log specific events happening.
// export const event = ({ action: , params }) => {
//   window.gtag('event', action, params)
// }