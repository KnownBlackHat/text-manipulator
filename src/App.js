import Navbar from "./components/Navbar.mjs"
import Textform from "./components/Form.mjs"
import Alert from "./components/Alert.js";
import {useState} from "react"

function App() {
  const [alerttext,setalert]=useState(null)
  const showalert= (color,msg)=>{
    setalert({color:color,msg:msg})
    setTimeout(() => {
      setalert(null)
    }, 1000);
  
  }
  return (
    <>
      <Navbar heading="Text Manipulator" />
      <div id="alert" className="h-[3rem] absolute right-0 top-0">
      <Alert obj={alerttext}/>
      </div>
      <Textform alert={showalert} />

    </>
  );
}

export default App;
