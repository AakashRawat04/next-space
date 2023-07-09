"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<div>
			<h2 className="text-black">Something went wrong!</h2>
			<button onClick={() => reset()} className="text-black">
				Try again
			</button>
		</div>
	);
}
