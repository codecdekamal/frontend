import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center vh-100">
  <div className="row">
    <div className="col-md-6 offset-md-3 text-center">
      <img  src="https://plus.unsplash.com/premium_photo-1682023585717-5cb1fad1b141?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3R8ZW58MHx8MHx8fDA%3D" alt="Robot"  className="img-fluid mb-4"/>
      <h1 className="display-4">Uh oh, something went wrong!</h1>
      <p className="lead mb-4">The page you requested is currently unavailable. Don't worry, we're on it!</p>
      <a href="/" className="btn btn-primary btn-lg">Go Home</a>
    </div>
  </div>
</div>

    </>
  )
}

export default ErrorPage
