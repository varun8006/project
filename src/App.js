
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

//Page
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Blogs from "./Components/Pages/Blogs"
import Contact from "./Components/Pages/Contact"
import Login from "./Components/Pages/Login";

//RE
import Cibilscore from "./Components/Login/REmodel/Cibilscore";
import Enquiry from "./Components/Login/REmodel/Enquiry";
import Enquirylist from "./Components/Login/REmodel/Enquirylist";
import Logout from "./Components/Login/REmodel/Logout";
import Admin from "./Components/Login/REmodel/Admin";
import Delete from "./Components/Login/REmodel/Delete";
import Update from "./Components/Login/REmodel/Update";



//OE
import OeAdmin from './Components/Login/OEmodel/OeAdmin'
import Operational from './Components/Login/OEmodel/Operational'
import Oeenquirylist from './Components/Login/OEmodel/Oeenquirylist'
import Logoutoe from './Components/Login/OEmodel/Logoutoe'
import Cibile from './Components/Login/OEmodel/Cibile'

//OE
import Cmadmin from './Components/Login/CMmodel/CmAdmin'
import Cmenquirylist from './Components/Login/CMmodel/Cmenquirylist'
import Logoutcm from './Components/Login/CMmodel/Logoutcm'


          // Registration 

          
           
import Registration from "./Components/Login/REmodel/Registration/Registration";


          // Uplodedocument 

          import Uplodedocument from "./Components/Login/REmodel/Uplodedocument/Uplodedocument";







function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>


          {/* RE */}
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/regional/enquiry" element={<Enquiry />}></Route>
          <Route path="/admin/regional/enquirylist" element={<Enquirylist />}></Route>
          <Route path="/admin/regional/cibilscore" element={<Cibilscore />}></Route>
          <Route path="/admin/regional/logout" element={<Logout />}></Route>
          <Route path="/admin/regional/delete/:userId" element={<Delete />}></Route>
          <Route path="/admin/regional/update/:userId" element={<Update />}></Route>




          {/* OE */}
          <Route path="/Oeadmin" element={<OeAdmin />}></Route>
          <Route path="/Oeadmin/Operational" element={<Operational />}></Route>
          <Route path="/Oeadmin/Oeenquirylist" element={<Oeenquirylist />}></Route>
          <Route path="/Oeadmin/Logoutoe" element={<Logoutoe />}></Route>
          <Route path="/Oeadmin/Cibile" element={<Cibile />}></Route>


          {/* CM */}
          <Route path="/cmadmin" element={<Cmadmin />}></Route>
          <Route path="/cmadmin/cmenquirylist" element={<Cmenquirylist />}></Route>
          <Route path="/cmadmin/logoutcm" element={<Logoutcm />}></Route>

          {/* Registration */}
          
          <Route path="/readmin/registration" element={<Registration />}></Route>

          {/* Uplodedocument */}

          <Route path="/readmin/uplodedocument" element={<Uplodedocument />}></Route>
          
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
