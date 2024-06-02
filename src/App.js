import "./App.css";
import Header from "./components/app/header/Header.jsx";
import StudentForm from "./components/app/student/student-form/StudentForm.jsx";
import StudentList from "./components/app/student/student-list/StudentList.jsx";
import { StudentProvider } from "./contexts/student/StudentContext.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./pages/shared/landing-page/LandingPage.jsx";
import StudentListPage from "./pages/app/student-list-pages/StudentListPage.jsx";
import NewStudentPage from "./pages/app/new-student-pages/NewStudentPage.jsx";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage.jsx";
import RedirectPage from "./pages/shared/redirect-page/RedirectPage.jsx";
import { useReducer } from "react";
import { useRef } from "react";

const initialState = {
  counter: 0,
  lastUpdateAt: new Date().toLocaleString(),
  error: {
    incErr: false,
    decErr: false,
    setCounterErr: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return {
        ...state,
        counter: state.counter + 1,
        lastUpdateAt: new Date().toLocaleString(),
      };
    case "DECREMENT_BY_ONE":
      return {
        ...state,
        counter: state.counter - 1,
        lastUpdateAt: new Date().toLocaleString(),
      };
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload.amount,
        lastUpdateAt: new Date().toLocaleString(),
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload.amount,
        lastUpdateAt: new Date().toLocaleString(),
      };
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload.amount,
        lastUpdateAt: new Date().toLocaleString(),
      };
    case "RESET":
      return {
        ...state,
        counter: 0,
        lastUpdateAt: new Date().toLocaleString(),
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incByRef = useRef();
  const decByRef = useRef();
  const setCounterWithRef = useRef();

  return (
    <div className="app">
      <p>Counter: {state.counter}</p>
      <p>lastUpdateAt: {state.lastUpdateAt}</p>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_ONE" })}>
        Increment by One
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_ONE" })}>
        Decrement by One
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <br />
      <br />
      <input type="text" placeholder="Increment Amount" ref={incByRef} />
      <button
        onClick={() => {
          return Number(incByRef.current.value)
            ? dispatch({
                type: "INCREMENT",
                payload: { amount: Number(incByRef.current.value) },
              })
            : dispatch({
                type: "ERROR",
                payload: { error: { ...state.error, incErr: true } },
              });
        }}
      >
        Increment
      </button>
      {state.error.incErr && <div>Please enter a number...</div>}
      <br />
      <input type="text" placeholder="Decrement Amount" ref={decByRef} />
      <button
        onClick={() => {
          return Number(decByRef.current.value)
            ? dispatch({
                type: "DECREMENT",
                payload: { amount: Number(decByRef.current.value) },
              })
            : dispatch({
                type: "ERROR",
                payload: { error: { ...state.error, decErr: true } },
              });
        }}
      >
        Decrement
      </button>
      {state.error.decErr && <div>Please enter a number...</div>}
      <br />
      <input type="text" placeholder="Set Counter" ref={setCounterWithRef} />
      <button
        onClick={() => {
          return Number(setCounterWithRef.current.value)
            ? dispatch({
                type: "SET_COUNTER",
                payload: { amount: Number(setCounterWithRef.current.value) },
              })
            : dispatch({
                type: "ERROR",
                payload: { error: { ...state.error, setCounterErr: true } },
              });
        }}
      >
        Set Counter
      </button>
      {state.error.setCounterErr && <div>Please enter a number...</div>}
    </div>
  );
}

export default App;
{
  /* <Router>
        <StudentProvider>
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/students" element={<StudentListPage />} />
            <Route path="/students/new" element={<NewStudentPage />} />
            <Route
              path="*"
              element={<NotFoundPage />}
              Component={RedirectPage}
            />
          </Routes>
        </StudentProvider>
      </Router> */
}
