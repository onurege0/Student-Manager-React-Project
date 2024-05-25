import "./App.css";
import Header from "./components/app/header/Header.jsx";
import StudentForm from "./components/app/student/student-form/StudentForm.jsx";
import StudentList from "./components/app/student/student-list/StudentList.jsx";
import { StudentProvider } from "./contexts/student/StudentContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/shared/landing-page/LandingPage.jsx";
import StudentListPage from "./pages/app/student-list-pages/StudentListPage.jsx";
import NewStudentPage from "./pages/app/new-student-pages/NewStudentPage.jsx";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage.jsx";
import RedirectPage from "./pages/shared/redirect-page/RedirectPage.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <StudentProvider>
          <Header />
          {/* <h2>Student Manager</h2> */}
          <br />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/students" element={<StudentListPage />} />
            <Route path="/students/new" element={<NewStudentPage />} />
            <Route path="*" element={<NotFoundPage />} Component={RedirectPage}/>
          </Routes>
        </StudentProvider>
      </Router>
    </div>
  );
}

export default App;
