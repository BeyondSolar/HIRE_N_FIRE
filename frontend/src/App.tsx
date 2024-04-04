import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./layouts/Login"

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout></Layout>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>
    </Router>
  )
}

export default App
