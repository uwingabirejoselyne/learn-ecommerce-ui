import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
            <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner'/>
            <div className='main-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>ipad s13+ pro</h5>
              <p>from $999.99 or $41.62/no</p>
              <Link className='button'>Buy now</Link>
            </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative'>
            <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>BEST SALE</h4>
              <h5>ipad s13+ pro</h5>
              <p>from $999.99 <br/> or $41.62/no</p>
            </div>
            </div>

            <div className='small-banner position-relative'>
            <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>SUPER ARRIVAL</h4>
              <h5>ipad s13+ pro</h5>
              <p>from $999.99<br/> or $41.62/no</p>
            </div>
            </div>
            <div className='small-banner position-relative'>
            <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>SUPER ARRIVAL</h4>
              <h5>ipad s13+ pro</h5>
              <p>from $999.99<br/> or $41.62/no</p>
            </div>
            </div>
            <div className='small-banner position-relative'>
            <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner'/>
            <div className='small-banner-content position-absolute'>
              <h4>SUPER ARRIVAL</h4>
              <h5>ipad s13+ pro</h5>
              <p>from $999.99<br/> or $41.62/no</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service.png' alt='services'></img>
                <div >
                  <h6>Free Shipping</h6>
                  <p className ="mb-0">From all orders over $5</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-02.png' alt='services'></img>
                <div >
                  <h6>Daily Suprise Offer</h6>
                  <p className ="mb-0">Save up to 25% off</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-03.png' alt='services'></img>
                <div>
                  <h6>Support 24/7</h6>
                  <p className ="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-04.png' alt='services'></img>
                <div>
                  <h6>Affordable prices</h6>
                  <p className ="mb-0">Get factory default price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-04.png' alt='services'></img>
                <div>
                  <h6>Secure Payments</h6>
                  <p className ="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/TV.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/TV.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured colletion</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <div className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src="images/famous02.jpg" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>from $3990r $16.62/mo for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src="images/catbanner-01.jpg" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 bits of brightness</h6>
                <p className='text-dark'>27-inch 5k rating display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src="images/catbanner-03.jpg" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>SmartPhones</h5>
                <h6 className='text-dark'>Smartphone 13 pro</h6>
                <p className='text-dark'>Now in Green from $999.00 or $444/24</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src="images/catbanner-01.jpg" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Home Speakers</h5>
                <h6 className='text-dark'>Room-filling sound</h6>
                <p className='text-dark'>27-inch 5k rating display</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
        <div className='col-12'>
            <h3 className='section-heading'> Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProducts/>
          <SpecialProducts/>
          <SpecialProducts/>
          <SpecialProducts/>
        </div>
      </div>
    </section>

    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our popular collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <section className='marquee-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand'/>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'> Our Latest Blogs </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
