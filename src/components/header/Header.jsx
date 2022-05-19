import React,{useState} from 'react'

const Header = () => {
  const [show, setshow] = useState(false);
  return (
    <>
    {/* <!--Header--> */}
    <header className="header-search header-logosec p-2 header-icons">
        <div className="container">
          <div className="d-flex">
            <div className="header-search-logo d-none d-lg-block"> <a className="header-logo header-brand-img" href="index.html" /> </div>
            <div className="d-flex ml-auto header-right-icons header-search-icon">
        <div className="dropdown d-md-flex notifications ">
        <a className="nav-link icon" data-toggle="dropdown" aria-expanded="true"> <i className="fe fe-shopping-cart" /> <span className="nav-unread badge badge-danger badge-pill">2</span> </a> 
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow cart-dropdown " x-placement="top-end" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-312px, -43px, 0px)'}}>
          <div className="drop-cart header-dropdown-list mCustomScrollbar _mCS_1 mCS-autoHide" style={{position: 'relative', overflow: 'visible'}}>
            <div id="mCSB_1" className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside" tabIndex={0}>
              <div id="mCSB_1_container" className="mCSB_container" style={{position: 'relative', top: '0px', left: '0px'}} dir="ltr">
                <div className="border-bottom">
                  <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
                    <div className> <img src="../assets/images/media/pictures/small/01.jpg" className="br-4 mCS_img_loaded" alt="img" /> </div>
                    <div className="d-flex">
                      <div className="pl-3">
                        <span className="fs-16 h4 d-block">HTML Template</span> 
                        <div className="fs-13 text-muted">HTML</div>
                      </div>
                    </div>
                    <div className="ml-auto text-center">
                      <a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13" /></a> 
                      <div className="h5 text-dark mt-1 mb-0">$24</div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
                    <div className> <img src="../assets/images/media/pictures/small/02.jpg" className="br-4 mCS_img_loaded" alt="img" /> </div>
                    <div className="d-flex">
                      <div className="pl-3">
                        <span className="fs-16 h4 d-block">Wordpress Template</span> 
                        <div className="fs-13 text-muted">Wordpress</div>
                      </div>
                    </div>
                    <div className="ml-auto text-center">
                      <a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13" /></a> 
                      <div className="h5 text-dark mt-1 mb-0">$18</div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
                    <div className> <img src="../assets/images/media/pictures/small/03.jpg" className="br-4 mCS_img_loaded" alt="img" /> </div>
                    <div className="d-flex">
                      <div className="pl-3">
                        <span className="fs-16 h4 d-block">Angular Template</span> 
                        <div className="fs-13 text-muted">Angular</div>
                      </div>
                    </div>
                    <div className="ml-auto text-center">
                      <a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13" /></a> 
                      <div className="h5 text-dark mt-1 mb-0">$22</div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
                    <div className> <img src="../assets/images/media/pictures/small/04.jpg" className="br-4 mCS_img_loaded" alt="img" /> </div>
                    <div className="d-flex">
                      <div className="pl-3">
                        <span className="fs-16 h4 d-block">PHP Template</span> 
                        <div className="fs-13 text-muted">PHP</div>
                      </div>
                    </div>
                    <div className="ml-auto text-center">
                      <a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13" /></a> 
                      <div className="h5 text-dark mt-1 mb-0">$12</div>
                    </div>
                  </div>
                </div>
                <div className>
                  <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
                    <div className> <img src="../assets/images/media/pictures/small/05.jpg" className="br-4 mCS_img_loaded" alt="img" /> </div>
                    <div className="d-flex">
                      <div className="pl-3">
                        <span className="fs-16 h4 d-block">PSD Template</span> 
                        <div className="fs-13 text-muted">PSD</div>
                      </div>
                    </div>
                    <div className="ml-auto text-center">
                      <a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13" /></a> 
                      <div className="h5 text-dark mt-1 mb-0">$5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal mCSB_scrollTools_vertical" style={{display: 'block'}}>
              <div className="mCSB_draggerContainer">
                <div id="mCSB_1_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: '50px', top: '0px', display: 'block', height: '216px', maxHeight: '266px'}} oncontextmenu="return false;">
                  <div className="mCSB_dragger_bar" style={{lineHeight: '50px'}} />
                </div>
                <div className="mCSB_draggerRail" />
              </div>
            </div>
          </div>
          <div className="dropdown-footer">
            <div className="btn-list"> <a href="cart.html" className="btn btn-primary  ripple mb-lg-0">View Cart</a> <a href="checkout.html" className=" btn btn-secondary  ripple mb-lg-0">Checkout</a> </div>
          </div>
        </div>
      </div>
              
            </div>
          </div>
        </div>
      </header>
      {/* <!--Header--> */}
      {/* <!-- Mobile Header --> */}
      <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '19.9125px'}}>
        <div className="horizontal-header clearfix " style={{width: '1519.2px'}}>
          <div className="container"> <a id="horizontal-navtoggle" className="animated-arrow"><span /></a> <span className="smllogo"><img src="../assets/images/brand/RM-White-logo.png" width={120} alt="img" /></span> <span className="smllogo-white"><img src="../assets/images/brand/RM-White-logo.png" width={120} alt="img" /></span> <a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true" /></a> </div>
        </div>
      </div>
      {/* <!-- Mobile Header --> */}
      {/* <!--Horizontal-main --> */}
      <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '61.525px'}}>
        <div className="header-style horizontal-main bg-dark-transparent clearfix" style={{width: '1519.2px'}}>
          <div className="horizontal-mainwrapper container clearfix">
            <nav className="horizontalMenu clearfix d-md-flex">
              <div className="horizontal-overlapbg" />
              <ul className="horizontalMenu-list">
                <li  >
                  <span className="horizontalMenu-click"><i className="horizontalMenu-arrow fa fa-angle-down" /></span><a  href="/" className="active">Home </a> 
                 
                </li>
                <li ><a href="categories.html">Categories </a></li>
                <li ><a href="about.html">About Us </a></li>
                
              
                <li><a href="contact.html"> Contact Us</a></li>
                <li  className="d-lg-none mt-5 pb-5 mt-lg-0"> <span><a className="btn ripple  btn-info" href="register.html">Register Now</a></span> </li>
              </ul>
              <ul className="mb-0">
                <li className="d-none d-lg-block "> <span><a className="btn ripple  btn-danger ad-post" href="register.html"><i className="fa fa-globe mr-2 text-white fs-16" />A Website For Me</a></span> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!--Horizontal-main --> */}
    
    </>
  )
}

export default Header;