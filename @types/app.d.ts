type Board = {
  id: number;
  title: string;
};

type Project = {
  id: number;
  title: string;
  items?: ProjectItem[];
};

interface ProjectItem {
  id: number;
  title: string;
  description?: string;
  createdAt?: Date;
  workTime?: Date;
  endedAt?: Date;
  priority?: "low" | "medium" | "high";
  files?: any;
  status?: "queue" | "development" | "done";
  subTask?: any;
  comments?: any;
}
