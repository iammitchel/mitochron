export const mockDepartments = [
  {
    id: 1,
    name: "Design Team",
    description:
      "But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each number.",
    departmentCount: 1,
    unitCount: 1,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    bgColor: "#E6F2FF",
    textColor: "#7DC9FF",
  },
  {
    id: 2,
    name: "Development Team",
    description:
      "But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each number.",
    departmentCount: 2,
    unitCount: 3,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    bgColor: "#FFF3B5",
    textColor: "#FFE756",
  },
];

export const fetchDepartments = (): Promise<typeof mockDepartments> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDepartments);
    }, 1000);
  });
};
