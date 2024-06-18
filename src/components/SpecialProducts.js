import React from 'react'
import ReactStars from 'react-rating-stars-component'

const SpecialProducts = () => {
  return (
    <div className='col-6 mb-3'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between '>
          <div>
            <img src="images/watch.jpg" className='img-fluid' alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Samsung Galaxy Note 10+ <br />
              Mobile Phone:Sim...
            </h6>
            <ReactStars 
            count={5} 
            size={24} 
            value='4' 
            activeColor='#ffd700' 
            edit={false}/>
            <p className="price">
              <span className="red-p">
                $100
              </span>
              &nbsp;<strike>$200</strike>
            </p>
            <div className="discount-till gap-10 d-flex align-items-center">
              <p className='mb-0'>
                <b>5</b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle p-3 bg-warning'>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProducts
