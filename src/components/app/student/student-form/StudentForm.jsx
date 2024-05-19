import { useContext, useState } from "react";
import StudentContext from "../../../../contexts/student/StudentContext";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    instructor: "",
  });
  const [studentError, setStudentError] = useState({
    studentNameError: false,
    courseError: false,
    instructorError: false,
  });
  const addStudent = (event) => {
    event.preventDefault();

    //errorları sıfırlamak için
    setStudentError({
      studentNameError: false,
      courseError: false,
      instructorError: false,
    });

    if (
      !student.name.trim() ||
      !student.course.trim() ||
      !student.instructor.trim()
    ) {
      // error mesajlarını ekranda göstermek için, student nesnesinin keylerinin true olmasını amaçlıyoruz
      setStudentError({
        studentNameError: !student.name,
        courseError: !student.course,
        instructorError: !student.instructor,
      });
    } else {
      createStudent(student);

      // two way binding
      setStudent({ name: "", course: "", instructor: "" });
    }
  };
  const { createStudent, isLoading } = useContext(StudentContext);

  return (
    <form action="">
      <input
        type="text"
        placeholder="student-name"
        value={student.name} // two way binding
        onChange={(event) =>
          setStudent({ ...student, name: event.target.value })
        }
      />
      <br />
      {/*error mesajlarını göstermek için, studentNameError true ise mesajı ekranda göster */}
      {studentError.studentNameError && <div>Please enter a valid name.</div>}
      <br />
      <input
        type="text"
        placeholder="course"
        value={student.course} // two way binding
        onChange={(event) =>
          setStudent({ ...student, course: event.target.value })
        }
      />
      <br />
      {/*error mesajlarını göstermek için, courseError true ise mesajı ekranda göster */}
      {studentError.courseError && <div>Please enter a valid course.</div>}
      <br />
      <input
        type="text"
        placeholder="instructor"
        value={student.instructor} // two way binding
        onChange={(event) =>
          setStudent({ ...student, instructor: event.target.value })
        }
      />
      <br />
      {/*error mesajlarını göstermek için, instructorError true ise mesajı ekranda göster */}
      {studentError.instructorError && (
        <div>Please enter a valid instructor.</div>
      )}
      <br />
      {isLoading ? (
        <button className="create-button" disabled>Create Student Card</button>
      ) : (
        <button className="create-button" onClick={addStudent}>
          Create Student Card
        </button>
      )}
    </form>
  );
};

export default StudentForm;
