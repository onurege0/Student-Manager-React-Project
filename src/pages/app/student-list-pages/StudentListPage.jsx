import React from "react";
import StudentList from "../../../components/app/student/student-list/StudentList";
import { useEffect } from "react";

const StudentListPage = () => {
  useEffect(() => {
    console.log("StudentListPage mounted");

    return () => {
      console.log("StudentListPage unmounted");
    };
  }, []);

  return (
    <div>
      <StudentList />
    </div>
  );
};

export default StudentListPage;
