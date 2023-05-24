import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";

export const getTodos = () => {
	return prisma.todo.findMany();
};

export async function toggleTodo(id: string, complete: boolean) {
	"use server";

	await prisma.todo.update({ where: { id }, data: { complete } });
}

export async function createTodo(data: FormData) {
	"use server";
	const title = data.get("title")?.valueOf();
	if (typeof title !== "string" || title.length === 0) {
		throw new Error("Invalid title");
	}

	await prisma.todo.create({ data: { title, complete: false } });
	redirect("/");
}
