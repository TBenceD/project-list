import { longTextWrapper, shortTextWrapper } from "../../common/helper";
import { ProjectEntity } from "../../entity";

type CardProps = {
  project: ProjectEntity;
  onClick: (value: ProjectEntity) => void;
};
export function Card(props: CardProps) {
  const { project, onClick } = props;

  return (
    <div
      onClick={() => onClick(project)}
      className="h-64 hover:skew-y-3 cursor-pointer bg-slate-600 flex flex-col flex-shrink-0 text-slate-400 rounded-lg border border-slate-950 shadow-[0_4px_16px_-4px_rgba(59,113,202,0.5)]"
    >
      <div
        className={`w-full h-32 rounded-t-lg bg-center bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <div className="p-2">
        <h1 className="text-sm sm:text-base font-bold text-slate-400">
          {shortTextWrapper(project.title)}
        </h1>
        <p className="text-xs sm:text-sm hyphens-auto text-slate-400" lang="hu">
          {longTextWrapper(project.description)}
        </p>
      </div>
    </div>
  );
}
