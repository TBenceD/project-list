import { ProjectEntity } from "../entity";
type getAllProjectsProps = {
  searchTerm?: string;
};

export const getAllProjects = async (props: getAllProjectsProps) => {
  const { searchTerm } = props;

  const projects = localStorage.getItem("projects");

  let trueData = [];

  if (projects) {
    trueData = await JSON.parse(projects);
  }

  if (searchTerm && searchTerm.trim() !== "") {
    return trueData.filter((project: ProjectEntity) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return trueData;
};
