import { LinksType } from "./links.entity";
import { WorkersType } from "./workers.entity";

export type ProjectEntity = {
  id: number;
  title: string;
  description: string;
  links: LinksType[];
  workers: WorkersType[];
  image: string;
};
