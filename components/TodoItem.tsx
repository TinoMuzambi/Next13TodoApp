"use client";

import { TodoItemProps } from "@/interfaces";

const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
	return (
		<li
			className="flex gap-1
     items-center"
			key={id}
		>
			<input
				type="checkbox"
				id={id}
				className="cursor-pointer peer"
				defaultChecked={complete}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className={`cursor-pointer peer-checked:line-through peer-checked:text-slate-500`}
			>
				{title}
			</label>
		</li>
	);
};
export default TodoItem;
