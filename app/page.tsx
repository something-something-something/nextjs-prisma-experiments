import Button from "./_clientComponents/Button";
import { prisma } from "./_db/dbConnection";

export default async function HomePage() {
	const blahUI = (await prisma.blah.findMany({})).map((b) => {
		return (
			<div key={b.uuidtest}>
				{b.id} {b.uuidtest}
			</div>
		);
	});

	return (
		<>
			home{blahUI}
			<Button />
		</>
	);
}
