import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Layout from "./layouts/Layout";
import FindTeams from "./layouts/FindTeams";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/findteams' element={<FindTeams></FindTeams>}/>
        <Route path='/register' element={<Layout><Register/></Layout>}/>
        <Route path='/sign-in' element={<Layout><SignIn/></Layout>}/>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  )
}

export default App
