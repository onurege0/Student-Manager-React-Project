import { baseService } from "../services/baseService";

export const getStudents = async () => {
  try {
    const response = await baseService.get("/students");
    return response.data;
  } catch (error) {
    console.error("getStudents error: ", error);
  }
};

// export const getStudentById = async (studentId) => {
//   try {
//     const response = await baseService.get(`/students/${studentId}`);
//     return response.data;
//   } catch (error) {
//     console.error("getStudentById error: ", error);
//   }
// };

export const postStudent = async (newStudent) => {
  try {
    const response = await baseService.post("/students", newStudent);
    return response.data;
  } catch (error) {
    console.error("postStudent error: ", error);
  }
};


export const deleteStudent = async (studentId) => {
  try {
    const response = await baseService.delete(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error("deleteStudent error: ", error);
  }
};
