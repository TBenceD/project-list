interface CardProps {
  title: string;
  description: string;
  image: string;
  id: number;
  onClick: (id: number) => void;
}
export function Card(props: CardProps) {
  return (
    <div
      onClick={() => props.onClick(props.id)}
      className="h-64 hover:skew-y-3 cursor-pointer dark:bg-slate-600 flex flex-col flex-shrink-0 dark:text-slate-400 rounded-lg border border-slate-950 shadow-lg shadow-sky-900"
    >
      {/*TODO picture*/}
      <img className="h-44 rounded-t-lg" src={props.image} alt={props.title} />
      <div className="p-2">
        <h1 className="text-sm sm:text-base font-bold text-gray-900 dark:text-slate-400">
          {props.title}
        </h1>
        <p
          className="text-xs sm:text-sm hyphens-auto text-gray-700 dark:text-slate-400"
          lang="hu"
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
