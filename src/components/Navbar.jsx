import React from 'react'

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-5'>Insta.News</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div onClick={() => setCategory("technology")} className="nav-link" style={{cursor: 'pointer'}}>Technology</div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("business")} className="nav-link" style={{cursor: 'pointer'}}>Business</div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("health")} className="nav-link" style={{cursor: 'pointer'}}>Health</div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("science")} className="nav-link" style={{cursor: 'pointer'}}>Science</div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("sports")} className="nav-link" style={{cursor: 'pointer'}}>Sports</div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory("entertainment")} className="nav-link" style={{cursor: 'pointer'}}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
