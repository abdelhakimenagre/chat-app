import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import React from "react";
import { Brouillant ,Corbeille,MessageEnvoyer,MessageReceive,MonCompt,Main} from "../pages";
import Utilisateurs from "../pages/Utilisateurs/Utilisateurs";


export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route  element={<Main/>}>
            <Route path="/" element={<MessageEnvoyer/>}/>
            <Route path="/messageReseved" element={<MessageReceive/>}/>
            <Route path="/MonCompt" element={<MonCompt/>}/>
            <Route path="/Corbeille" element={<Corbeille />}/>
            <Route path="/Brouillons" element={<Brouillant/>}/>
            <Route path="/Utilisateurs" element={<Utilisateurs/>}/>



        </Route>
    </Routes>
    </Router>
  )
}
