import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNotes from './components/MyNotes';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/mynotes' element={<MyNotes/>}/>
          <Route path='/myprofil' element={<MyProfile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
