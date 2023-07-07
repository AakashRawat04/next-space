import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "About Us",
	description: "About NextSpace",
	keywords: ["next space", "ashs space"],
};

export default async function About() {
	return <main></main>;
}
