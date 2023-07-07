export const revalidate = 1200; // ISR demonstration (incrimental static regeneration)

interface Post {
	title: string;
	content: string;
	slug: string;
}

export async function generateStaticParams() {
	const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
		(res) => res.json()
	);

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

interface Props {
	params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
	const posts: Post[] = await fetch("http://localhost:3000/api/content", {
		cache: "no-cache",
	}).then((res) => res.json());

	const post = posts.find((post) => post.slug === params.slug);
	return (
		<div>
			<h1 className="text-black">{post?.title}</h1>
			<p className="text-black">{post?.content}</p>
		</div>
	);
}
