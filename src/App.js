import React from "react";
import { HashRouter as Router ,Routes, Route,Navigate  } from "react-router-dom";

import Header from "./components/UI/Header/Header";
import Main from "./pages/Main";
import OurWorks from "./pages/OurWorks";
import CardList from "./components/CardList";
import cards from "./data/bd.js";
import Cards from "./components/Cards";

const App =() =>{
    return(
		
        <Router>
			
			<Header/>
			<Routes >
				
				<Route  path="/" element={<Main/>}/>
				<Route path="work" element={<OurWorks/>}/>	
				<Route path="work/:catalogName" element={<Cards/>}/>
				<Route path="*" element={<Navigate to="/" replace />}/>
			</Routes>
		</Router>
    );
}

export default App;