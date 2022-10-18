import { useState } from 'react';

interface todos {
	name: string;
	completed: boolean;
}

const list: todos[] = [
	{
		name: 'todos 1',
		completed: true,
	},
	{
		name: 'todos 2',
		completed: false,
	},
];

function App(): JSX.Element {
	const [todos, setTodos] = useState<todos[]>(list);
	const [completed, setCompleted] = useState(false);

	const handleSubmit = (task: string): void => {
		console.log(task);
	};

	return (
		<div>
			<h1 className='text-center text-6xl text-red-600'>TODO APP</h1>
			<form action=''>
				<button
					className={
						completed
							? `h-5 w-5 rounded-full bg-red-500`
							: `h-5 w-5 rounded-full bg-slate-500`
					}
					onClick={() => setCompleted(!completed)}
				/>
				<input
					className='border'
					id='task'
					name='task'
					type='text'
				/>
			</form>
			{todos.map((todo) => (
				<li key={todo.name}>{todo.name}</li>
			))}
			<div className='attribution'>
				Challenge by{' '}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					rel='noreferrer'
					target='_blank'>
					Frontend Mentor
				</a>
				. Coded by <a href='#'>Your Name Here</a>.
			</div>
		</div>
	);
}

export default App;
