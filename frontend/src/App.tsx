import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

import Layout from "./layouts/Layout";

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
