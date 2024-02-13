import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../common/query-keys";
import { getAllProjects } from "../../api";
import { Card, LoadingCard } from "../../components/card";
import { CardDetailModal, LandingPageHeader } from "./components";
import { ProjectEntity } from "../../entity";
import { useDebounce } from "../../common/hooks";

export function LandingPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectEntity>();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");

  const getProjects = useQuery({
    queryKey: [QueryKeys.GET_ALL_PROJECTS, { searchTerm: searchTerm }],
    queryFn: () =>
      getAllProjects({
        searchTerm,
      }),
  });

  const handleModalVisible = () => {
    if (openModal) {
      setSelectedProject(undefined);
    }
    setOpenModal((openModal) => !openModal);
  };

  const handleClickOnProject = (project: ProjectEntity) => {
    handleModalVisible();
    setSelectedProject(project);
  };

  const handleSearch = useDebounce((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, 250);

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

    handleSearch(e.target.value);
  };

  return (
    <main className="w-full p-4">
      <LandingPageHeader
        handleSearchTextChange={handleSearchTermChange}
        searchText={searchText}
      />

      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {getProjects.isLoading ? (
          <LoadingCard />
        ) : (
          getProjects.data?.map((project: ProjectEntity) => (
            <Card
              project={project}
              key={project.id}
              onClick={handleClickOnProject}
            />
          ))
        )}
      </div>
      {openModal && selectedProject && (
        <CardDetailModal
          handleCloseModal={handleModalVisible}
          project={selectedProject}
        />
      )}
    </main>
  );
}
