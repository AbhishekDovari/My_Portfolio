import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import {Notfound} from './pages/NotFound';
import { Toaster } from "./components/ui/toaster";

function App(){
  return (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route  index element={< Home/>}/>
        <Route path="*" element={< Notfound/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;