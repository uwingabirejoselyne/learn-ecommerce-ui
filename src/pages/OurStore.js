import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCard'


const OurStore = () => {
  const [grid,setGrid] = useState(4)
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
                    <div className="form-floating ">
                      <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
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
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-chek">
                      <input type="checkbox" className='form-check-input' value="" id="color-1" />
                      <label className='form-check-label'>
                        S (2)
                      </label>
                    </div>
                    <div className="form-chek">
                      <input type="checkbox" className='form-check-input' value="" id="color-2" />
                      <label className='form-check-label'>
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <spam className='badge bg-light text-secondary roundend-3 py-2 px-3'>
                      Headphone
                    </spam>
                    <spam className='badge bg-light text-secondary roundend-3 py-2 px-3'>
                      Laptop
                    </spam>
                    <spam className='badge bg-light text-secondary roundend-3 py-2 px-3'>
                      Mobile
                    </spam>
                    <spam className='badge bg-light text-secondary roundend-3 py-2 px-3'>
                      Wire
                    </spam>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className='w-75'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value='4' activeColor='#ffd700' edit={false} />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className='w-75'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value='4' activeColor='#ffd700' edit={false} />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className='filter-sort-grid mb-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By</p>
                    <select name="" className='form-control form-select' id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">Alphabetically,A-Z</option>
                      <option value="title-descending">Alphabetically,Z-A</option>
                      <option value="price-ascending">Price,low to high</option>
                      <option value="price-descending">price , high to low</option>
                      <option value="created-ascending">Date, Old to new</option>
                      <option value="created-descendig">Date. New to old</option>
                    </select>
                  </div>
                  <div className='d-flex gap-10 align-items-center' >
                    <p className="total-products mb-0">21 products</p>
                    <div className='d-flex gap-10 align-items-center grid '>
                      <img src="images/gr3.svg" onClick={()=>{
                        setGrid(3)
                      }} className='d-block img-fluid' alt="grid" />
                      <img src="images/gr4.svg" onClick={()=>{
                        setGrid(4)
                      }} className='d-block img-fluid' alt="grid" />
                      <img src="images/gr2.svg" onClick={()=>{
                        setGrid(6)
                      }} className='d-block img-fluid' alt="grid" />
                      <img src="images/gr.svg" onClick={()=>{
                        setGrid(12)
                      }} className='d-block img-fluid' alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
