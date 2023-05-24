type TodoItemProps = {
	id: string;
	title: string;
	complete: Boolean;
};

const TodoItem = ({ id, title, complete }: TodoItemProps) => {
	return <li key={id}>{title}</li>;
};
export default TodoItem;
