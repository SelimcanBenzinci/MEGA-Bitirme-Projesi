import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SeksenbinPage from "./newPages/SeksenbinPage.jsx";
import KafeMeram from "./newPages/KafeMeram.jsx";
import MerambagPage from "./newPages/MerambagPage.jsx";
import MEGAPage from "./newPages/MEGAPage.jsx";
import TantaviPage from "./newPages/TantaviPage.jsx";
import KayaPage from "./newPages/KayaPage.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faaliyet from "./pages/Faaliyet";
import Konut from "./pages/Konut";

function App(){
	return (<>
		<Navbar/>
		<Routes>
			<Route path="/" element={<About/>}/>
			<Route path="/sitekonutları" element={<Konut/>}/>
			<Route path="/faaliyet" element={<Faaliyet/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/new1" element={<MerambagPage/>}/>
			<Route path="/new2" element={<KayaPage/>}/>
			<Route path="/new3" element={<TantaviPage/>}/>
			<Route path="/new5" element={<KafeMeram/>}/>
			<Route path="/new6" element={<MEGAPage/>}/>
			<Route path="/new8" element={<SeksenbinPage/>}/>
		</Routes>
	</>);
}

export default App;
