import React, { useEffect, useState } from 'react'

const Login = () => {

  // * use State 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {

    e.preventDefault();

  }

  console.log(formData)

  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col col-lg-6 col-md-6 col-12">
          <div className="card" style={{ marginTop: "10%" }}>
            <div className="card-body">
              <p className="card-title mb-4" style={{ fontSize: "2rem" }}>Log In</p>
              <form onSubmit={onSubmit}>

                <div className='form-group'>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='Your Email Address ...'
                      name='email'
                      value={email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your password</label>
                    <input type="password" className="form-control" placeholder='Your Password ...'
                      name='password'
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <button type='submit' className='btn btn-block btn-md btn-primary'>Log In</button>
                </div>
              </form>

              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login