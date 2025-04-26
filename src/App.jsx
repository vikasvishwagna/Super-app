import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Forms/Form"
import Gener from "./Pages/Gener";
import Movies from "./Pages/Movies";
import Error from "./Pages/404";

function App() {

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/gener" element={<Gener />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
