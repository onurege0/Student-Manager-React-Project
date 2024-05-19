import "./App.css";
import Header from "./components/app/header/Header.jsx";
import StudentForm from "./components/app/student/student-form/StudentForm.jsx";
import StudentList from "./components/app/student/student-list/StudentList.jsx";
import {
  StudentProvider,
} from "./contexts/student/StudentContext.jsx";

function App() {
  return (
    <div className="app">
      <StudentProvider>
        <Header
          title={"Student Manager"}
          navElements={["Courses", "Instructors", "Contact Us"]}
        />
        <h2>Student Manager</h2>
        <StudentForm />
        <StudentList />
      </StudentProvider>
    </div>
  );
}

export default App;
