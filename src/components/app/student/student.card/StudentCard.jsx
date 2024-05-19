import { useContext } from "react";
import StudentContext from "../../../../contexts/student/StudentContext";

const StudentCard = ({ student }) => {
  const { deleteStudent, isLoading } = useContext(StudentContext);

  const handleDelete = () => {
    try {
      deleteStudent(student.id);
    } catch {
      throw new Error ("Error")
    }
  };

  return (
    <div className="student-card">
      <div className="delete-button">
        {isLoading ? (
          <button>X</button>
        ) : (
          <button onClick={handleDelete}>X</button>
        )}
      </div>
      <ul>
        <li>{student.name}</li>
        <li>{student.course}</li>
        <li>{student.instructor}</li>
      </ul>
    </div>
  );
};

export default StudentCard;
