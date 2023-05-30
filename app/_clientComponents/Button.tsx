"use client";

import { useRouter } from "next/navigation";
import { addBlah } from "../_serverActions/actions";

export default function Button() {
	const router = useRouter();

	return (
		<button
			onClick={async () => {
				await addBlah();
				router.refresh();
			}}
		>
			add blah
		</button>
	);
}
