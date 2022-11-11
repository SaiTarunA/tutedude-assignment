import { Route, Routes } from 'react-router-dom';
import './App.css';
import FriendsReferred from './components/FriendsReferred/FriendsReferred';
import NavBar from './components/NavBar/NavBar';
import PathDescription from './components/PathDescription/PathDescription';
import ReferAndEarn from './components/ReferAndEarn/ReferAndEarn';
import ScrollToTop from './ScrollToTop';

function App() {
  const referalCode = "EDCH54"

  return (
    <div className="App">
      <NavBar />
      <PathDescription />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<ReferAndEarn referalCode={referalCode}/>} />
        <Route exact path="/FriendsReferred" element={<FriendsReferred referalCode={referalCode}/>} />
      </Routes>
    </div>
  );
}

export default App;
