import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AuthForm from './components/authentication/auth-form/auth-form.component';
import ToDo from './components/todo/todo-main/todo-main.component';
import LandingPage from "./components/landing-page/landing-page.component";

const App = () => {
 
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to = "/authform"/>} />
    //     <Route path="/authform" element={<AuthForm />}/>
    //     <Route path="/todo" element={<ToDo />}/>
    //   </Routes>
    // </Router>
        <LandingPage />
  );
}

export default App;
