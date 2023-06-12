import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Booking from "./routes/Booking";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/booking" element = {<Booking />}/>
        <Route path = "/menu" element = {<Menu />}/>
      </Routes>
    </>
  );
}

export default App;
