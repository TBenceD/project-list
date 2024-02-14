import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../common/query-keys";
import { getAllProjects } from "../../../api";
import { Card, LoadingCard } from "../../../components/card";
import { ProjectEntity } from "../../../entity";

type LandingPageContentProps = {
  searchTerm?: string;
  handleClickOnProject: (project: ProjectEntity) => void;
};

export function LandingPageContent(props: LandingPageContentProps) {
  const { searchTerm, handleClickOnProject } = props;

  const getProjects = useQuery({
    queryKey: [QueryKeys.GET_ALL_PROJECTS, { searchTerm: searchTerm }],
    queryFn: () =>
      getAllProjects({
        searchTerm,
      }),
  });

  return (
    <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {getProjects.isLoading ? (
        <LoadingCard />
      ) : (
        getProjects.data?.map((project: ProjectEntity) => (
          <Card
            key={project.id}
            project={project}
            onClick={handleClickOnProject}
          />
        ))
      )}
    </div>
  );
}
