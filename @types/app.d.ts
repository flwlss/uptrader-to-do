type Board = {
  id: number;
  title: string;
  items: BoardItem[];
};

interface BoardItem {
  id: number;
  title: string;
  description?: string;
  createdAt?: Date;
  workTime?: Date;
  endedAt?: Date;
  priority?: "low" | "meduim" | "high";
  files?: any;
  status?: "queue" | "development" | "done";
  subTask?: any;
  comments?: any;
}
