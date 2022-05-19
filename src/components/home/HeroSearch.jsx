import React from 'react'

const HeroSearch = () => {
  return (
    <>
      <section>
        <div className="sptb-2">
          <div className="header-text mb-0">
            <div className="container">
              <div className="search-background bg-transparent">
                <div className="text-center text-white mb-6">
                  <h1 className="mb-1">The Biggest World is MarketPlace Themes</h1>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable.</p>
                </div>
                <div className="row mb-5">
                  <div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="search-form">
                      <div className="xdsoft_autocomplete" style={{display: 'block', width: '776px'}}>
                        <input type="text" className="form-control input-lg keywords-input xdsoft_input" id="text4" placeholder="Search Product....." autoComplete="off" style={{fontSize: '14px', background: 'white !important'}} />
                        <div className="xdsoft_autocomplete_dropdown" style={{left: '0px', top: '46px', marginLeft: '0px', marginRight: '0px', width: '776px'}} />
                        <input readOnly className="xdsoft_autocomplete_hint" style={{boxSizing: 'border-box', borderStyle: 'solid', borderCollapse: 'separate', borderWidth: '0px', padding: '10px 16px', margin: '0px', maxHeight: 'none', minHeight: '0px', maxWidth: 'none', minWidth: '0px', width: '776px', letterSpacing: 'normal', lineHeight: '18.6667px', outlineWidth: '0px', fontFamily: 'Roboto, sans-serif', fontVariant: 'normal', fontStyle: 'normal', fontSize: '14px', fontWeight: 400, flex: '0 1 auto', justifyContent: 'normal', borderRadius: '4px', boxShadow: 'none', height: '46px', position: 'absolute', zIndex: 1, borderColor: 'transparent', outlineColor: 'transparent', left: '0px', top: '0px', background: 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)'}} />
                      </div>
                      <button className="btn ripple "><i className="fe fe-search" /></button> 
                    </div>
                  </div>
                </div>
                <div className="temp-categories">
                  <ul className>
                    <li> <a href="#"><span>All Templates</span></a> </li>
                    <li> <a href="#"><span>HTML</span></a> </li>
                    <li> <a href="#"><span>Wordpress</span></a> </li>
                    <li> <a href="#"><span>PHP</span></a> </li>
                    <li> <a href="#"><span>Angular</span></a> </li>
                    <li> <a href="#"><span>PSD</span></a> </li>
                    <li> <a href="#"><span>Plugins</span></a> </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /header-text */} 
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSearch