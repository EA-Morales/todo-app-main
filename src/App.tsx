import { FormEvent, useEffect, useState } from "react";

import background from "./assets/images/bg-mobile-light.jpg";
import Moon from "./assets/icons/Moon";
import Article from "./components/Article";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [filtered, setFiltered] = useState<Todos[]>([]);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("cargo el useEffect");
    const countTodosUncompleted = todos.filter(
      (todo) => !todo.completed
    ).length;

    setCount(countTodosUncompleted);
  }, [todos]);

  const handleSubmitTodo = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setTodos([...todos, { id: Date.now(), title, completed }]);

    setTitle("");
  };

  const handleDeleteTodo = (id: number): void => {
    const todo = todos.filter((todo) => todo.id !== id);

    setTodos(todo);
  };

  const handleSetCompleted = (id: number): void => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  };

  const clearCompleted = (): void => {
    const clear = todos.filter((todo) => !todo.completed);

    setTodos(clear);
  };

  return (
    <div
      className="h-screen bg-slate-200 bg-no-repeat p-4"
      style={{
        backgroundImage: `url(${background})`,
      }}>
      <header className="container mt-[50px] w-full">
        <section className="flex justify-between">
          <h1 className="text-xl font-bold tracking-[0.5rem] text-white">
            TODO
          </h1>
          <button>
            <Moon className="h-5 w-5 text-white" />
          </button>
        </section>

        <form
          className="mt-10 flex w-full items-center gap-2 rounded-lg bg-white py-2 pl-5 pr-2"
          onSubmit={handleSubmitTodo}>
          <button
            className={
              completed
                ? `from-gradient-1 to-gradient-2 h-5 w-5 rounded-full border-[1px] bg-gradient-to-r`
                : `h-5 w-5 rounded-full border-[1px]`
            }
            type="button"
            onClick={() => setCompleted(!completed)}
          />
          <input
            className="w-full"
            placeholder="Create a new todo..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </header>

      <main className="mt-4">
        {todos.map((todo) => (
          <Article
            key={todo.id}
            completed={todo.completed}
            handleDeleteTodo={handleDeleteTodo}
            handleSetCompleted={handleSetCompleted}
            id={todo.id}
            title={todo.title}
          />
        ))}

        <section className="flex justify-between gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white px-5 py-2 text-slate-400">
          <p>{count} items left</p>
          <button onClick={clearCompleted}>Clear Completed</button>
        </section>

        <section className="mt-4 flex justify-center gap-4 rounded-lg border-b-[1px] border-slate-400 bg-white px-5 py-2 text-slate-400">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>

        <p className="mt-4 text-center text-slate-400">
          Drag and drop to reorder list
        </p>
      </main>

      <footer className="absolute bottom-0">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}

export default App;
