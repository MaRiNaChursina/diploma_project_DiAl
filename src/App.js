import React from "react";
import { HashRouter as Router ,Routes, Route,Navigate  } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Main from "./pages/Main";
import OurWorks from "./pages/OurWorks";
import Cards from "./components/Cards";
import News from "./pages/News";
import NewsCard from "./components/UI/NewsCard/NewsCard";
import Footer from "./components/Footer/Footer";
import Order from "./pages/Order";
import OrderForm from "./components/OrderForm/OrderForm";
import InvoiceForm from "./components/OrderForm/InvoiceForm";
import AdminPanel from "./pages/AdminPanel";
import CardAdmin from "./components/AdminP/CardAdmin/CardAdmin";
import CardAdd from "./components/AdminP/CardAdmin/CardAdd";

const App =() =>{
	
    return(
        <Router>
			<Header/>
			<Routes >
				<Route  path="/" element={<Main/>}/>
				<Route path="work" element={<OurWorks/>} />	
				<Route path="work/:catalogName" element={<Cards chekCard={false}/>}/>
				<Route path="news" element={<News/>}/>
				<Route path="news/:title" element={<NewsCard/>}/>
				<Route path="order/*" element={<Order/>}>
					<Route path="orders" element={<OrderForm/>}/>
					<Route path="invoice" element={<InvoiceForm/>}/>
				</Route>
				<Route path="admin/*" element ={<AdminPanel/>} >
					<Route path="card/*" element = {<CardAdmin/>}>
						<Route path="add" element={<CardAdd/>} />
					</Route>
				</Route>
				<Route path="*" element={<Navigate to="/" replace />}/>
			</Routes>
			<Footer/>
		</Router>
    );
}

export default App;
