import React, { FormEvent, useState } from "react";

interface todos {
	name: string;
	completed: boolean;
}

const list: todos[] = [
	{
		name: "todos 1",
		completed: true,
	},
	{
		name: "todos 2",
		completed: false,
	},
];

function App(): JSX.Element {
	const [todos, setTodos] = useState<todos[]>(list);
	const [completed, setCompleted] = useState(false);
	const [title, setTitle] = useState("");

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		console.log(title);
		setTitle("");
	}

	return (
		<div className="container">
			<header className="h-32 bg-[url('../src/assets/images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
				<div className="flex flex-col px-4 pt-6">
					<div className="flex justify-between">
						<h1 className="text-2xl font-bold tracking-[0.5em] text-white">
							TODO
						</h1>
						<span>lunita</span>
					</div>
					<div className="flex items-center gap-4 rounded-lg bg-white p-2">
						<button
							className={
								completed
									? `h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500`
									: `h-5 w-5 rounded-full bg-slate-500`
							}
							onClick={() => setCompleted(!completed)}
						/>
						<form
							className=""
							onSubmit={handleSubmit}>
							<input
								className="w-full"
								id="title"
								name="title"
								placeholder="Create a new task"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</form>
					</div>
				</div>
			</header>
			{todos.map((todo) => (
				<li key={todo.name}>{todo.name}</li>
			))}
			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					rel="noreferrer"
					target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Your Name Here</a>.
			</div>
		</div>
	);
}

export default App;
