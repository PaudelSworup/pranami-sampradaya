export const items: {
  id: Number;
  menu: string;
  to: string;
  subMenu?: { id: number; menu: string; to: string }[];
}[] = [
  {
    id: 1,
    menu: "Home",
    to: "/",
  },

  {
    id: 3,
    menu: "Articles",
    to: "/articles",
  },
  {
    id: 3,
    menu: "Videos",
    to: "/videos",
  },

  {
    id: 4,
    menu: "Gallery",
    to: "/gallery",
  },

  {
    id: 5,
    menu: "Bhajan",
    to: "#",
  },
];
