
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


//Home Page
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Blogs from "./Components/Pages/Blogs"
import Contact from "./Components/Pages/Contact"
import Login from "./Components/Pages/Login";

//RE 
import Readmin from "./Components/Login/REmodel/Readmin";
import Cibilscore from "./Components/Login/REmodel/Cibilscore";
import Enquiry from "./Components/Login/REmodel/Enquiry";
import Enquirylist from "./Components/Login/REmodel/Enquirylist";
import Logout from "./Components/Login/REmodel/Logout";
import Delete from "./Components/Login/REmodel/Delete";
import Update from "./Components/Login/REmodel/Update";

//RE Delete
import Cibild from "./Components/Login/REmodel/Cibildelete/Cibild";

//RE Registration
import Registration from "./Components/Login/REmodel/Registration/Registration";

//RE Registration delete

import Regdelete from "./Components/Login/REmodel/Registration/Regdelete";

//RE Registration Uplode

import Uplodedoc from "./Components/Login/REmodel/Uplodedoc/Uplodedoc";






//OE
import OeAdmin from './Components/Login/OEmodel/OeAdmin'
import Operational from './Components/Login/OEmodel/Operational'
import Oeenquirylist from './Components/Login/OEmodel/Oeenquirylist'
import Oelogout from './Components/Login/OEmodel/Oelogout'
import Oecibil from "./Components/Login/OEmodel/Oecibil";




//CM
import Cmadmin from './Components/Login/CMmodel/CmAdmin'
import Cmenquirylist from './Components/Login/CMmodel/Cmenquirylist'
import Cmlogout from './Components/Login/CMmodel/Cmlogout'





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
          <Route path="/readmin" element={<Readmin />}></Route>
          <Route path="/readmin/regional/enquiry" element={<Enquiry />}></Route>
          <Route path="/readmin/regional/enquirylist" element={<Enquirylist />}></Route>
          <Route path="/readmin/regional/cibilscore" element={<Cibilscore />}></Route>
          <Route path="/readmin/regional/logout" element={<Logout />}></Route>
          <Route path="/readmin/regional/delete/:userId" element={<Delete />}></Route>
          <Route path="/readmin/regional/update/:userId" element={<Update />}></Route>

          {/* cibild */}
          
          <Route path="/readmin/regional/cibild/:userId" element={<Cibild/>}></Route>

          {/* Registration */}

          <Route path="/readmin/regional/cibild/registration" element={<Registration/>}></Route>
          
          {/* Registration delete */}
          <Route path="/cmadmin/cmenquirylist/regdelete/:userId" element={<Regdelete/>}></Route>

          {/* Uplode file  */}

          <Route path="/cmadmin/cmenquirylist/uplode" element={<Uplodedoc/>}></Route>



          


          

          {/* OE */}
          <Route path="/oeadmin" element={<OeAdmin />}></Route>
          <Route path="/oeadmin/Operational" element={<Operational />}></Route>
          <Route path="/oeadmin/Oeenquirylist" element={<Oeenquirylist />}></Route>
          <Route path="/oeadmin/Oelogout" element={<Oelogout />}></Route>
          <Route path="/oeadmin/oecibil" element={<Oecibil/>}></Route>

          {/* CM */}
          <Route path="/cmadmin" element={<Cmadmin />}></Route>
          <Route path="/cmadmin/cmenquirylist" element={<Cmenquirylist />}/>
          <Route path="/cmadmin/Cmlogout" element={<Cmlogout />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
