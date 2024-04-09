import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./layouts/Login"
import FindTeams from "./layouts/FindTeams"

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout></Layout>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/findteams' element={<FindTeams></FindTeams>}/>
      </Routes>
    </Router>
  )
}

export default App
