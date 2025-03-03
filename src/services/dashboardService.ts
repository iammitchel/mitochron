export const mockDashboardData = [
  {
    id: 1,
    name: "Ventura Brody",
    email: "venturaBrody@co.ng",
    address: "Lagos, Nigeria",
    departmentAmount: 600,
    unitAmount: 700,
  },
];

export const fetchDashboardData = (): Promise<typeof mockDashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDashboardData);
    }, 1500);
  });
};
