export const availableBoards: Board[] = [
  {
    id: 1,
    title: "queue",
  },
  {
    id: 2,
    title: "development",
  },
  {
    id: 3,
    title: "done",
  },
];

export const availableProjects: Project[] = [
  {
    id: 1,
    title: "Новый проект",
    items: [
      {
        id: 1,
        title: "Сделать домашку",
        status: "development",
      },
      {
        id: 2,
        title: "Сделать домашку2",
        status: "development",
      },
      {
        id: 3,
        title: "Сделать домашку3",
        status: "queue",
      },
    ],
  },
  {
    id: 2,
    title: "Старый проект",
    items: [
      {
        id: 4,
        title: "Сходить в магазин",
        status: "done",
      },
      {
        id: 5,
        title: "Сходить в магазин2",
        status: "done",
      },
      {
        id: 6,
        title: "Сходить в магазин3",
        status: "done",
      },
    ],
  },
];
