import axios from "axios";
import { useState } from "react";
import {
  postStudent,
  deleteStudent as deleteStudentAPI,
  getStudents as getStudentsAPI,
} from "../../network/requests/studentRequest";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:3000/students")
  //     .then((response) => response.json())
  //     .then((response) => setStudentList(response));
  //   // return (() => )
  // }, []);

  // const getStudents = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios("http://localhost:5050/students");
  //     if (response.status !== 200) {
  //       throw new Error("Error");
  //     }
  //     setStudentList(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const createStudent = async (newStudent) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post(
  //       "http://localhost:5050/students",
  //       newStudent
  //     );
  //     if (response.status !== 201) {
  //       throw new Error("Error");
  //     }
  //     setStudentList((prevStudentList) => [...prevStudentList, response.data]);
  //   } catch (error) {
  //     throw new Error("Error");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const deleteStudent = async (id) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.delete(
  //       `http://localhost:5050/students/${id}`
  //     );
  //     if (response.status !== 200) {
  //       throw new Error("Error");
  //     }
  //     setStudentList(studentList.filter((student) => student.id !== id));
  //   } catch (error) {
  //     throw new Error("Student could not be deleted");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const createStudent = async (student) => {
    try {
      setIsLoading(true);
      const newStudent = await postStudent(student);
      setStudentList((prevStudentList) => [...prevStudentList, newStudent]);
    } catch (error) {
      console.log("Student could not be added", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      setIsLoading(true);
      await deleteStudentAPI(studentId);
      setStudentList((prevStudentList) => {
        return prevStudentList.filter((student) => student.id !== studentId);
      });
    } catch (error) {
      console.log("Student could not be deleted", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudents = async () => {
    try {
      setIsLoading(true);
      const students = await getStudentsAPI();
      setStudentList(students);
    } catch (error) {
      console.log("Student could not be read", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { studentList, isLoading, createStudent, deleteStudent, getStudents };
};

export default useStudent;
