import background from "./assets/images/bg-mobile-light.jpg";
import Moon from "./assets/icons/Moon";

function App(): JSX.Element {
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

        <form className="mt-10 flex w-full items-center gap-2 rounded-lg bg-white py-2 pl-5 pr-2">
          <button
            className="h-5 w-5 rounded-full border-[1px]"
            type="button"
          />
          <input
            className="w-full"
            placeholder="Create a new todo..."
            type="text"
          />
        </form>
      </header>

      <main className="mt-4">
        <article className="flex gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white py-2 px-5">
          <button className="h-5 w-5 rounded-full border-[1px]" />
          <p className="grow">Terminar esta mierda</p>
          <span>X</span>
        </article>
        <article className="flex gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white py-2 px-5">
          <button className="h-5 w-5 rounded-full border-[1px]" />
          <p className="grow">Terminar esta mierda</p>
          <span>X</span>
        </article>
        <article className="flex gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white py-2 px-5">
          <button className="h-5 w-5 rounded-full border-[1px]" />
          <p className="grow">Terminar esta mierda</p>
          <span>X</span>
        </article>
        <article className="flex gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white py-2 px-5">
          <button className="h-5 w-5 rounded-full border-[1px]" />
          <p className="grow">Terminar esta mierda</p>
          <span>X</span>
        </article>
        <section className="flex justify-between gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white px-5 py-2 text-slate-400">
          <p>5 items left</p>
          <button>Clear Completed</button>
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
