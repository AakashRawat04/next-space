import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetaData({ params }: Props): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	const { name, bio, image, id } = user ?? {};
	return (
		<div>
			<h1 className="text-black">{name}</h1>

			<img
				width={300}
				src={image ?? "/mememan.webp"}
				alt={`${name}'s profile`}
			/>

			<h3 className="text-black">Bio</h3>
			<p className="text-black">{bio}</p>
		</div>
	);
}
