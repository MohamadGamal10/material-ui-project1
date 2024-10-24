import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";




function App() {

  


  return (
    
    
    <div className="App">
     <Routes>
        <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="profile"  /> */}
        {/* <Route path="settings"  /> */}
        </Route>
     </Routes>
    </div>
  
  );
}

export default App;
