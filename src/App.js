import React from "react";
import {BrowserRouter as Router ,Routes, Route  } from "react-router-dom";

import Header from "./components/UI/Header/Header";
import Main from "./pages/Main";
import OurWorks from "./pages/OurWorks";

const App =() =>{
    return(
		
        <Router>
			
			<Header/>	
			<Routes >
				
				<Route path="/" element={<Main/>}/>
				<Route path="/work" element={<OurWorks/>}/>	
				
			</Routes>
		</Router>
    );
}

export default App;