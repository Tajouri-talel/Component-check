import './App.css';
import FullName from './Component/Profile/FullName.js';
import Adress from './Component/Profile/Adress.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';


const App=()=> (
  
    <>
    <div className="App">
    <div className="Name">
    <FullName/>
    <br/>
    </div>
          <Adress/>
          <ProfilePhoto/>
    </div>
    </>
);


export default App;
