const menuData = [
  {
    id: 1,
    title: "Home",
    newTab: true,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about/overview",
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "Overview",
        newTab: true,
        path: "/about/overview",
      },
      {
        id: 22,
        title: "Partners",
        newTab: true,
        path: "/about/partners",
      },
    ],
  },
  {
    id: 3,
    title: "Find Tests",
    newTab: true,
    path: "/tests",
    submenu: [
      {
        id: 31,
        title: "Somantic Test",
        newTab: true,
        path: "/tests/somantic-test",
      },
      {
        id: 32,
        title: "Hereditary Cancer Test",
        newTab: true,
        path: "/tests/hereditary-cancer-test",
      },
      {
        id: 33,
        title: "Liquid Biopsy Test",
        newTab: true,
        path: "/tests/liquid-biopsy-test",
      },
    ],
  },
  {
    id: 4,
    title: "Blogs",
    newTab: false,
    path: "/blogs",
  },
  {
    id: 10,
    title: "Sample Reports",
    newTab: false,
    path: "/sample-reports",
  },
  {
    id: 8,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
  // {
  //   id: 9,
  //   title: "Book Test",
  //   newTab: false,
  //   path: "https://wa.link/z7ub10",
  // },
  // {
  //   id: 10,
  //   title: "Admin",
  //   newTab: false,
  //   path: "/login",
  // },
];
export default menuData;
