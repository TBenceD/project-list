interface LinksType {
  name: string;
  url: string;
}

interface WorkersType {
  name: string;
  position: string;
}

export interface ProjectEntity {
  id: number;
  title: string;
  description: string;
  links: LinksType[];
  workers: WorkersType[];
  image: string;
}
