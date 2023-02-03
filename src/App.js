import Navbar from "./components/Navbar.mjs"
import Textform from "./components/Form.mjs"
import Alert from "./components/Alert.js";
import { useState } from "react"


function App() {
  const [alerttext, setalert] = useState([])
  const showalert = (color, msg) => {
    const id = Date.now()
    setalert([...alerttext, { color: color, msg: msg, id: id }])
  }
  // Data: [{color:"red",msg:"my-msg"},{color:"blue",msg:"new-msg"}]
  return (
    <>
      <Navbar heading="Text Manipulator" />
      <div id="alert" className="w-1/5 text-center absolute right-0 top-0">
        {alerttext.map(element => { return <Alert key={element.id} obj={element} /> })}
        {/* <Alert obj={alerttext}/> */}
      </div>
      <Textform alert={showalert} />

    </>
  );
}

export default App;
