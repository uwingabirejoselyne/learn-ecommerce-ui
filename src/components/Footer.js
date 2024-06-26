import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' />
                <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group mb-3">
                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Search product here" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Kigali-Nyamirambo
                </address>
                <a href='' className='mt-3 d-block mb-1 text-white'>+2505991851</a>
                <a href='' className='mt-2 d-block mb-0 text-white'>uwingajoselyne@gmail.com</a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href='' className='text-white fs-4'><BsLinkedin/></a>
                  <a href='' className='text-white fs-4'><BsInstagram/></a>
                  <a href='' className='text-white fs-4'><BsGithub/></a>
                  <a href='' className='text-white fs-4'><BsYoutube/></a>

                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white mb-1">Privacy Policy</Link>
                <Link className="text-white mb-1">Refund Policy</Link>
                <Link className="text-white mb-1">Shipping Policy</Link>
                <Link className="text-white mb-1">Terms & Conditions</Link>
                <Link className="text-white mb-1">Blogs</Link>

              </div>
            </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white mb-1">About Us</Link>
              <Link className="text-white mb-1">Faq</Link>
              <Link className="text-white mb-1">Contact</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white mb-1">Laptops</Link>
              <Link className="text-white mb-1">Headphones</Link>
              <Link className="text-white mb-1">Tablet</Link>
              <Link className="text-white mb-1">Watch</Link>
            </div>
          </div>
        </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center mb-0 text-white'>
              <p>&copy: {new Date().getFullYear()}: powered by developer's corner</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
