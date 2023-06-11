import Home from "./routes/Home";
import About from "./routes/About";
import Booking from "./routes/Booking";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/booking" element = {<Booking />}/>
        <Route path = "/about" element = {<About />}/>
      </Routes>
    </>
  );
}

export default App;
