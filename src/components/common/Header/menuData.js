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
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "The Corporate",
        newTab: true,
        submenu: [
          {
            id: 211,
            title: "Key MileStones",
            path: "/who-we-are/corporate/key-milestones",
            newTab: false,
          },
          {
            id: 212,
            title: "Chairman's Desk",
            path: "/who-we-are/corporate/chairman-desk",
            newTab: false,
          },
          {
            id: 213,
            title: "Overview",
            path: "/who-we-are/corporate/overview",
            newTab: false,
          },
          {
            id: 214,
            title: "Our Board of Directors",
            path: "/who-we-are/corporate/board-of-directors",
            newTab: false,
          },
          {
            id: 215,
            title: "Our Leadership and Team",
            path: "/who-we-are/corporate/leadership",
            newTab: false,
          },
          {
            id: 216,
            title: "CSR",
            path: "/who-we-are/corporate/csr",
            newTab: false,
          },
        ],
      },
      {
        id: 22,
        title: "Global Presence",
        newTab: true,
        submenu: [
          {
            id: 221,
            title: "Global Footprints",
            path: "/who-we-are/global-presence/global-footprints",
            newTab: false,
          },
          {
            id: 222,
            title: "Global Accreditation",
            path: "/who-we-are/global-presence/global-accreditation",
            newTab: false,
          },
          {
            id: 223,
            title: "Awards and Recognitions",
            path: "/who-we-are/global-presence/awards-and-recognitions",
            newTab: false,
          },
        ],
      },
      {
        id: 23,
        title: "Corporate Governance",
        newTab: false,
        submenu: [
          {
            id: 231,
            title: "Code of Conduct BMID",
            path: "/pdfs/pdf1.pdf",
            newTab: false,
          },
          {
            id: 232,
            title: "Code of conduct for Disclosure",
            path: "/pdfs/pdf2.pdf",
            newTab: false,
          },
          {
            id: 233,
            title: "Code of Conduct",
            path: "/pdfs/pdf3.pdf",
            newTab: false,
          },
          {
            id: 234,
            title: "Familiarization Programme For Independent Directors",
            path: "/pdfs/pdf4.pdf",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Find Tests",
    newTab: true,
    submenu: [
      {
        id: 31,
        title: "The Corporate",
        newTab: true,
        submenu: [
          {
            id: 311,
            title: "Bhiwadi Plant",
            path: "/infrastructure/corporate/bhiwadi-plant",
            newTab: false,
          },
          {
            id: 312,
            title: "Haridwar Unit-I",
            path: "/infrastructure/corporate/haridwar-unit-1",
            newTab: false,
          },
          {
            id: 313,
            title: "Haridwar Unit-II",
            path: "/infrastructure/corporate/haridwar-unit-2",
            newTab: false,
          },
          {
            id: 314,
            title: "FACILITY TOUR",
            path: "/infrastructure/corporate/facility-tour",
            newTab: false,
          },
        ],
      },
      {
        id: 32,
        title: "Global Presence",
        newTab: true,
        submenu: [
          {
            id: 321,
            title: "API DAHEJ PLANT",
            path: "/infrastructure/global-presence/api-dahej-plant",
            newTab: false,
          },
        ],
      },
      {
        id: 33,
        title: "Corporate Governance",
        newTab: false,
        submenu: [
          {
            id: 331,
            title: "Corporate Research and Development",
            path: "/infrastructure/corporate-governance/corporate-research",
            newTab: false,
          },
          {
            id: 332,
            title: "Facility Tour R&D",
            path: "/infrastructure/corporate-governance/facility-tour-r&d",
            newTab: false,
          },
          {
            id: 333,
            title: "Quality",
            path: "/infrastructure/corporate-governance/quality",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Upload Prescription",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Therapy",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Cancer Care",
            path: "/product-and-therepy/therepy/cancer-care",
            newTab: false,
          },
          {
            id: 412,
            title: "Cardiology",
            path: "/product-and-therepy/therepy/cardiology",
            newTab: false,
          },
          {
            id: 413,
            title: "CNS",
            path: "/product-and-therepy/therepy/cns",
            newTab: false,
          },
          {
            id: 414,
            title: "Diabetology",
            path: "/product-and-therepy/therepy/diabetology",
            newTab: false,
          },
          {
            id: 415,
            title: "Anti-Infective",
            path: "/product-and-therepy/therepy/anti-infective",
            newTab: false,
          },
          {
            id: 416,
            title: "Anti-Malarial",
            path: "/product-and-therepy/therepy/anti-malarial",
            newTab: false,
          },
          {
            id: 417,
            title: "Vitamins and Supplements",
            path: "/product-and-therepy/therepy/vitamins-and-suplements",
            newTab: false,
          },
          {
            id: 418,
            title: "Pain Management",
            path: "/product-and-therepy/therepy/pain-management",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "Products",
        newTab: false,
        submenu: [
          {
            id: 421,
            title: "Cancer Care",
            path: "/product-and-therepy/product/cancer-care",
            newTab: false,
          },
          {
            id: 422,
            title: "Cardiology",
            path: "/product-and-therepy/product/cardiology",
            newTab: false,
          },
          {
            id: 423,
            title: "CNS",
            path: "/product-and-therepy/product/cns",
            newTab: false,
          },
          {
            id: 424,
            title: "Diabetology",
            path: "/product-and-therepy/product/diabetology",
            newTab: false,
          },
          {
            id: 425,
            title: "Other Generics",
            path: "/product-and-therepy/product/other-generics",
            newTab: false,
          },
          {
            id: 426,
            title: "Pain Management",
            path: "/product-and-therepy/product/pain-management",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
];
export default menuData;
