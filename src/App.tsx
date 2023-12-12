import { Box } from "@chakra-ui/react";

// import { LogAndSign } from "./components/LogAndSign";
import { InicioPage } from "./components/InicioPage";

import { Routes, Route } from "react-router-dom";
import { LogIn } from "./components/Login";
import { TeacherLogin } from "./components/TeacherLogin";
import { StudentLogin } from "./components/LoginStudents";
import { InicioAdmin } from "./components/InicioAdmin";
import { PanelTeacher } from "./components/InicioAdmin/PanelTeacher";
import { PanelStudent } from "./components/InicioAdmin/PanelStudent";

function App() {
  return (
    <Box w={"full"} h={"100vh"}>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="loginTeacher" element={<TeacherLogin />} />
        <Route path="loginEstudiante" element={<StudentLogin />} />
        <Route path="inicioAdmin" element={<InicioAdmin />} />
        <Route path="inicioTeacher" element={<StudentLogin />} />
        <Route path="inicioStudent" element={<StudentLogin />} />
        <Route path="tableTeacher" element={<PanelTeacher />} />
        <Route path="tableStudent" element={<PanelStudent />} />
      </Routes>
    </Box>
  );
}

export default App;
