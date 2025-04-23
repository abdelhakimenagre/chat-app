import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import React from "react";
import { Brouillant ,Corbeille,MessageEnvoyer,MonCompt,Main} from "../pages";
import Utilisateurs from "../pages/Utilisateurs/Utilisateurs";


export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route  element={<Main/>}>
            <Route path="/" element={<MessageEnvoyer/>}/>
            <Route path="/MonCompt" element={<MonCompt/>}/>
            <Route path="/Corbeille" element={<Corbeille />}/>
            <Route path="/Utilisateurs" element={<Utilisateurs/>}/>



        </Route>
    </Routes>
    </Router>
  )
}
