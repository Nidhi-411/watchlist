import './App.css';
import Body from './Components/Body';
import SideBar from './Components/SideBar';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <div className="flex flex-row h-screen">
      <Provider store={store}>
      <SideBar/>
      <Body/>
      </Provider>

    </div>
  );
}



export default App;
