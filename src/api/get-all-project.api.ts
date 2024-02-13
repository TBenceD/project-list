import { placeholderImage } from "../common/hooks";

const dummyData = [
  {
    id: 1,
    title: "Első project",
    description: "Project description",
    image: placeholderImage("Első project"),
    workers: [
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
      { name: "Henry Monroe", position: "Crab man" },
    ],
    links: [{ name: "Google", url: "https://google.com" }],
  },
  {
    id: 2,
    title: "Második project",
    description: "Project description",
    image: placeholderImage("Második project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
  {
    id: 3,
    title: "Hamradik project",
    description: "Project description",
    image: placeholderImage("Hamradik project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
  {
    id: 4,
    title: "Negyedik project",
    description: "Project description",
    image: placeholderImage("Negyedik project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
  {
    id: 5,
    title: "Ötödik project",
    description: "Project description",
    image: placeholderImage("Ötödik project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
  {
    id: 6,
    title: "Hatodik project",
    description: "Project description",
    image: placeholderImage("Hatodik project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
  {
    id: 7,
    title: "Hetedik project",
    description: "Project description",
    image: placeholderImage("Hetedik project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
  {
    id: 8,
    title: "Nyolcadik project",
    description: "Project description",
    image: placeholderImage("Nyolcadik project"),
    workers: [{ name: "", position: "" }],
    links: [{ name: "", url: "" }],
  },
];

interface getAllProjectsProps {
  searchTerm?: string;
}

export const getAllProjects = async (props: getAllProjectsProps) => {
  const { searchTerm } = props;

  if (searchTerm && searchTerm.trim() !== "") {
    return dummyData.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return dummyData;
};
