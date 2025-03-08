import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AuthForm from './components/authentication/auth-form/auth-form.component';
import ToDo from './components/todo/todo-main/todo-main.component';

const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to = "/authform"/>} />
        <Route path="/authform" element={<AuthForm />}/>
        <Route path="/todo" element={<ToDo />}/>
      </Routes>
    </Router>
  );
}

export default App;
