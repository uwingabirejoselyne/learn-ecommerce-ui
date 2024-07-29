import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="our store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> filter By </h3>
                <div>
                  <h5 className="sub-title">
                    Availability
                  </h5>
                  <div>
                    <div className="form-chek">
                      <input type="checkbox" className='form-check-input' value="" id="" />
                      <label className='form-check-label'>
                        In Stock(1)
                      </label>
                    </div>
                    <div className="form-chek">
                      <input type="checkbox" className='form-check-input' value="" id="" />
                      <label className='form-check-label'>
                        Out Of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <ul className='colors ps-0'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> Product Tags</h3>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> Random Product</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
