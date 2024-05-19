import React from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import useStudent from "../../components/hooks/useStudent";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { studentList, isLoading, createStudent, deleteStudent, getStudents } =
    useStudent();

  useEffect(() => {
    getStudents();
    // return () => console.log("cleanup");
  }, []);

  const contextValue = {
    studentList,
    isLoading,
    createStudent,
    deleteStudent,
    getStudents,
  };
  // const contextValue = useStudent();
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
