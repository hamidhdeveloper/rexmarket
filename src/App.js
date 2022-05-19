import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TopBar from "./components/header/TopBar";
import Download from "./components/home/Download";
import HeroSearch from "./components/home/HeroSearch";
import NewTemplates from "./components/home/NewTemplates";
import Testimonials from "./components/home/Testimonials";
import TotalViews from "./components/home/TotalViews";
import WhyChooseUs from "./components/home/WhyChooseUs";




function App() {
  return (
    <Router>
    <>
    
    <div className="horizontalMenucontainer">
    
    
    <div className="banner-1 cover-image bg-background2" data-image-src="../assets/images/banners/banner2.jpg" style={{background: 'url("../assets/images/banners/banner2.jpg") center center'}} data-select2-id={6}>
    {/* our code here */}
    <div className="header-main">
      <TopBar />
      <Header />
    </div>
    <Switch>
          <Route exact path="/h">
            <HeroSearch />
          </Route>
          <Route path="/about">
            <NewTemplates />
          </Route>
          <Route path="/dashboard">
          <Testimonials />
          </Route>
        </Switch>
    
      <HeroSearch />
    
    </div>
       <NewTemplates />
       <WhyChooseUs />
       <Testimonials />
       <TotalViews />
       <Download />

       
       <Footer/>
    </div>
    
     
    </>
    </Router>
  );
}

export default App;
