import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./layouts/Login"
import FindTeams from "/home/naveen/Documents/FREQUENT/STUDY RELATED STUFFS/CODES/6th semester shit/HIRE N FIRE/HIRE_N_FIRE/frontend/src/layouts/FindTeams.tsx"

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
