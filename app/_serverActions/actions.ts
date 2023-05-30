"use server";

import { prisma } from "../_db/dbConnection";

export async function addBlah() {
	await prisma.blah.create({
		data: {
			uuidtest: crypto.randomUUID(),
		},
	});
}
