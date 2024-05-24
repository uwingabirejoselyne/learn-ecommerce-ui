import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='py-3'></footer>
    <footer className='py-3'></footer>
    <footer className='py-3'>
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
