import { useState } from "react";
import {
  CardDetailModal,
  LandingPageContent,
  LandingPageHeader,
} from "./components";
import { ProjectEntity } from "../../entity";
import { useDebounce } from "../../common/hooks";

export function LandingPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectEntity>();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");

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
      <LandingPageContent
        searchTerm={searchTerm}
        handleClickOnProject={handleClickOnProject}
      />
      {openModal && selectedProject && (
        <CardDetailModal
          handleCloseModal={handleModalVisible}
          project={selectedProject}
        />
      )}
    </main>
  );
}
