import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
	"use server";
	const title = data.get("title")?.valueOf();
	if (typeof title !== "string" || title.length === 0) {
		throw new Error("Invalid title");
	}

	await prisma.todo.create({ data: { title, complete: false } });
	redirect("/");
}

const New: React.FC = (): JSX.Element => {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">New</h1>
			</header>
			<form action={createTodo} className="flex gap-2 flex-col">
				<input
					type="text"
					name="title"
					className="border border-slate-300 bg-transparent px-2 py-1 rounded  focus-within:bg-slate-700 outline-none"
				/>
				<div className="flex gap-1 justify-end">
					<Link
						className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
						href=".."
					>
						Cancel
					</Link>
					<button
						className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
						type="submit"
					>
						Create
					</button>
				</div>
			</form>
		</>
	);
};
export default New;
