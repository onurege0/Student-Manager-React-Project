import React from "react";
import StudentForm from "../../../components/app/student/student-form/StudentForm";
import { useEffect } from "react";
const NewStudentPage = () => {
  useEffect(() => {
    console.log("NewStudentPage mounted");

    return () => {
      console.log("NewStudentPage unmounted");
    };
  }, []);

  return (
    <div>
      <StudentForm />
    </div>
  );
};

export default NewStudentPage;
