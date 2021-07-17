import sanityClient from "../sanity/sanityClient";

export interface IPost {
  slug?: Slug;
  imageUrl?: string;
  author?: Author;
  body?: Array<Object>;
  title?: string;
  categories?: Array<string>;
  _createdAt?: Date;
}

interface Slug {
  current: string;
}

interface Author {
  name: string;
}
export const postPerPage: number = 4;

export const postSize = async () => await getPostSize();

export const pages = async () => {
  const size: number = await postSize();
  const pages: Array<string> = [];

  for (let i = 1; i <= Math.ceil(size / postPerPage); i++)
    pages.push(i.toString());
  return pages;
};

export async function getPostSize() {
  const query: string = `
	*[_type == "post" && !(_id in path("drafts.**"))] {
		id
	}`;
  const queryResult = await sanityClient.fetch<Array<any>>(query);
  return queryResult.length;
}

export async function getPostByPage(page: number) {
  return await getPosts(page);
}

export async function getPosts(page: number = 1) {
  const query: string = `
	*[_type == "post" && !(_id in path("drafts.**"))] | order(_createdAt desc)[$offset...$page] {
		title,
		body,
		_createdAt,
		slug,
		"author": author->,
		"imageUrl": mainImage.asset->url,
		"categories": categories[]->title
	}`;
  const queryResult = await sanityClient.fetch<Array<any>>(query, {
    offset: (page - 1) * postPerPage,
    page: page * postPerPage,
  });
  return queryResult;
}

export async function getPostIds() {
  const query: string = `*[_type == "post" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
		_id
	  }`;
  let queryResult = await sanityClient.fetch<Array<any>>(query);
  return queryResult.map((val) => {
    return val.id;
  });
}

export async function getPostSlugs() {
  const query: string = `*[_type == "post" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
		"slug": slug.current
	}`;
  let queryResult = await sanityClient.fetch<Array<any>>(query);

  return queryResult.map((val) => {
    return val.slug;
  });
}

export async function getPostBySlug(slug: String) {
  const query: string = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
		title,
		body[] {
      ...,
      asset-> {
        url
      }
    },
		_createdAt,
		author->,
		"categories": categories[]->title,
		"imageUrl": mainImage.asset->url
	}`;
  let queryResult = await sanityClient.fetch<IPost>(query, { slug: slug });
  return queryResult;
}
