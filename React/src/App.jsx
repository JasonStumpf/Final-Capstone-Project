import './Static.css';
import { Route, Routes } from 'react-router-dom';
import Quiz from './views/Quiz';
import Home from './views/Home';
import MyNav from './components/MyNav';
import Highscores from './views/Highscores';
import SignUp from './views/Signup';

function App() {

  return (
    <>
      <MyNav />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/quiz' element={<Quiz />} />
        <Route children path='/highscores' element={<Highscores />} />
        <Route children path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App