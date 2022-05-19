import React, { useEffect,useState } from 'react'

const TopBar = () => {
  const [countrydata, setCountrydata] = useState({});
  useEffect(() => {
    fetch('https://extreme-ip-lookup.com/json/?key=demo2')
    .then( res => res.json())
    .then(response => {
    //  console.log("Country is : ", response);
    setCountrydata(response);
    //  console.log("Country name : ", response.isp);
   })
   .catch((data, status) => {
     console.log('Request failed:', data);
   });
    },[])
    
  return (
    <>
     <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-sm-4 col-7">
              <div className="top-bar-left d-flex">
                <div className="clearfix">
                  <ul className="socials">
                    <li> <a className="social-icon text-dark" target="_blank" rel="noreferrer" href="https://web.facebook.com/rextechsol/"><i className="fa fa-facebook" /></a> </li>
                    <li> <a className="social-icon text-dark" target="_blank" rel="noreferrer" href="https://twitter.com/hamiddeveloper"><i className="fa fa-twitter" /></a> </li>
                    <li> <a className="social-icon text-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hamid-hussain-248081a2"><i className="fa fa-linkedin" /></a> </li>
                    <li> <a className="social-icon text-dark" target="_blank" rel="noreferrer" href="https://instagram.com/hamid.developer"><i className="fa fa-instagram" /></a> </li>
                  </ul>
                </div>
                <div className="clearfix">
                  <ul className="contact">
                    <li className="d-lg-none"> <a href="/" className="callnumber text-dark"><span><i className="fa fa-phone mr-1" />: +425 345 8765</span></a> </li>
                    <li className="select-country">
                      
                      <span className="select2 select2-container select2-container--default" dir="ltr"  style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" ><span className="select2-selection__rendered" id="select2-yspx-container" role="textbox" aria-readonly="true" title={countrydata.country}><span><img src={`../assets/images/flags/${countrydata.countryCode}.svg`} className="img-flag" alt="imgcountry"/>{countrydata.country}</span></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span> 
                    </li>
                    <li className="dropdown">
                      <a href="/" className="text-dark" data-toggle="dropdown"><span> English </span> </a> 
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow"> <a href="/" className="dropdown-item"> English </a> <a className="dropdown-item" href="/"> Arabic </a> <a className="dropdown-item" href="/"> German </a> <a href="/" className="dropdown-item"> Greek </a> <a href="/" className="dropdown-item"> Spanish </a> </div>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
              <div className="top-bar-right">
                <ul className="custom">
                  <li> <a href="register.html" className="text-dark"><i className="fa fa-user mr-1" /> <span>Register</span></a> </li>
                  <li> <a href="login.html" className="text-dark"><i className="fa fa-sign-in mr-1" /> <span>Login</span></a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar