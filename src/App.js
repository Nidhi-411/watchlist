import './App.css';
import MainContainer from './Components/MainContainer';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="flex flex-row  h-full">
      <SideBar/>
      <MainContainer/>
    </div>
  );
}

export default App;
