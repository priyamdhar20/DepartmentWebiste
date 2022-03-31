import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StudentLogin from './pages/StudentLogin';
import StudentSignUp from './pages/StudentSignUp';
import TeacherLogin from './pages/TeacherLogin';
import TeacherSignUp from './pages/TeacherSignUp';
import QuestionSetUI from './pages/QuestionSetUI';

function App() {
  return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/StudentLogin" element={<StudentLogin />}></Route>
					<Route path="/StudentSignUp" element={<StudentSignUp />}></Route>
					<Route path="/TeacherLogin" element={<TeacherLogin />}></Route>
					<Route path="/TeacherSignUp" element={<TeacherSignUp />}></Route>
					<Route path="/QuestionSet" element={<QuestionSetUI />}></Route>
				</Routes>
			</BrowserRouter>
		</>
  );
}

export default App;
