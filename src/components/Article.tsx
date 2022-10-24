interface Props {
  id: number;
  title: string;
  completed: boolean;
  handleDeleteTodo: (id: number) => void;
  handleSetCompleted: (id: number) => void;
}

const Article = ({
  id,
  title,
  completed,
  handleDeleteTodo,
  handleSetCompleted,
}: Props): JSX.Element => {
  return (
    <article className="flex gap-2 rounded-lg border-b-[1px] border-slate-400 bg-white py-2 px-5">
      <button
        className={
          completed
            ? "from-gradient-1 to-gradient-2 h-5 w-5 rounded-full border-[1px] bg-gradient-to-r"
            : "h-5 w-5 rounded-full border-[1px] bg-gradient-to-r"
        }
        onClick={() => handleSetCompleted(id)}
      />
      <p className="grow">{title}</p>
      <button onClick={() => handleDeleteTodo(id)}>X</button>
    </article>
  );
};

export default Article;
