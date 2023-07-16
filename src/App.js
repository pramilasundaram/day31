    import React, { useReducer } from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'react-toastify/dist/ReactToastify.css';
    import Createstudent from "../src/pages/student/create/Create"   
    import Reducer from './components/contextProvider/Reducer'
    import Homestudent from './pages/student/home/Home';
    import Editstudent from './pages/student/edit/Edit';
    import sdata from "./student.json"
    import tdata from "./Teacher.json"
    import Profilestudent from './pages/student/profile/Profile';
    import Dashboard from './pages/dashboard/Dashboard';
    import Hometeacher from './pages/teacher/home/Home';
    import Editteacher from "./pages/teacher/edit/Edit";
    import Profileteacher from "./pages/teacher/profile/Profile";
    import Createteacher from "./pages/teacher/create/Create"
    import Studentlist from './pages/teacher/studentlist/Studentlist';
    import Header from "./components/header/Header";
    import Footer from "./components/footer/Footer";
    import { Route, BrowserRouter, Routes } from 'react-router-dom'
    import { dataContext } from './components/contextProvider/Contextprovider'
import Calender from './pages/calender/Calender';

    
    export default function App() {
   
      const initialstate = {
        student: sdata,
        teacher: tdata,
        studentcount:sdata.length,
        teachercount:tdata.length
      }
      const [state, dispatch] = useReducer(Reducer, initialstate)     
      return (
        <dataContext.Provider value={{ state, dispatch }}>
          <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/studenthome" element={<Homestudent />} />
              <Route path="/createstudent" element={<Createstudent />} />
              <Route path="/editstudent/:id" element={<Editstudent />} />
              <Route path="/profilestudent/:id" element={<Profilestudent />} />
              <Route path="/teacherhome" element={<Hometeacher />} />
              <Route path="/createteacher" element={<Createteacher />} />
              <Route path="/editteacher/:id" element={<Editteacher />} />
              <Route path="/profileteacher/:id" element={<Profileteacher />} />
              <Route path="/studentlist/:id" element={<Studentlist />} />
              <Route path="/calender" element={<Calender/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </dataContext.Provider>
      )
    }
