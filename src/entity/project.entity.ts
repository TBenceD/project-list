import { LinksType } from "./links.entity";
import { WorkersType } from "./workers.entity";

export interface ProjectEntity {
  id: number;
  title: string;
  description: string;
  links: LinksType[];
  workers: WorkersType[];
  image: string;
}
