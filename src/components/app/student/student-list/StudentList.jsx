import { useContext } from "react";
import StudentCard from "../student.card/StudentCard";
import StudentContext from "../../../../contexts/student/StudentContext";

const StudentList = () => {
  const { studentList, isLoading } = useContext(StudentContext);
  return (
    <div>
      <h2>Students</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        studentList.map((student) => {
          return (
            <div className="student-card-container" key={student.id}>
              <div>Student: </div>
              <StudentCard student={student} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default StudentList;
