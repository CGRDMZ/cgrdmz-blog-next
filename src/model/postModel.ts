import sanityClient from "../sanity/sanityClient";

export async function getPosts() {
	const query: string = `
	*[_type == "post"] | order(_createdAt desc) {
		title,
		body,
		_createdAt,
		slug,
		"author": author->,
		"imageUrl": mainImage.asset->url,
		"categories": categories[]->title
	}`;
  	const queryResult = await sanityClient.fetch<Array<any>>(query);
	console.log(queryResult);
	return queryResult;
}

export async function getPostIds() {
	const query: string = `*[_type == "post"] | order(_createdAt desc) {
		_id
	  }`;
	let queryResult = await sanityClient.fetch<Array<any>>(query);
	console.log(queryResult);
	return queryResult.map(val => {
		return val.id;
	});
}