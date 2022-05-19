import React from 'react'

const TotalViews = () => {
  return (
    <>
    <section className="sptb bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card counter-status mb-lg-0">
                <div className="card-body">
                  <div className="counter-icon bg-primary box-primary-shadow border-0"> <i className="fe fe-codepen text-white" /> </div>
                  <h5>Total Items</h5>
                  <h2 className="counter mb-0">2569</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card counter-status mb-lg-0">
                <div className="card-body">
                  <div className="counter-icon bg-secondary border-0 box-secondary-shadow"> <i className="fe fe-shopping-cart text-white" /> </div>
                  <h5>Total Sales</h5>
                  <h2 className="counter mb-0">1765</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card counter-status mb-sm-0">
                <div className="card-body">
                  <div className="counter-icon bg-success border-0 box-success-shadow"> <i className="fe fe-users text-white" /> </div>
                  <h5>Total Members</h5>
                  <h2 className="counter mb-0">846</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card counter-status mb-0">
                <div className="card-body">
                  <div className="counter-icon bg-info border-0 box-info-shadow"> <i className="icon icon-emotsmile text-white" /> </div>
                  <h5>Happy Customers</h5>
                  <h2 className="counter mb-0">7253</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TotalViews