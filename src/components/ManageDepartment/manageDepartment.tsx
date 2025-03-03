import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { fetchDepartments } from "../../services/departmentService";
import { DepartmentCard } from "../DepartmentCard";
import { CreateDepartmentCard } from "../CreateDepartment";

export const ManageDepartmentCard: React.FC = () => {
  const [departments, setDepartments] = useState<
    { id: number; name: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments()
      .then((data) => {
        setDepartments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setLoading(false);
      });
  }, []);

  const handleCreateDepartment = () => {
    console.log("Open department creation modal");
  };

  return (
    <Box className="grid grid-cols-3 gap-14 p-8">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} {...dept} />
          ))}
          <CreateDepartmentCard onCreate={handleCreateDepartment} />
        </>
      )}
    </Box>
  );
};
