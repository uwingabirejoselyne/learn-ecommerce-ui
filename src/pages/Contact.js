import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact U" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.471622058724!2d30.05945227406846!3d-1.9652191480169776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5d0af80c81b%3A0x8b55e963cf79653a!2sBiryogo%2C%20Kigali!5e0!3m2!1sen!2srw!4v1722534661752!5m2!1sen!2srw" width="600"
                height="450"
                className='border-0 w-100'
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Phone' />
                    </div>
                    <div>
                      <textarea name=""
                        cols="30" className='w-100 form-control' rows="10"
                        id="" placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
