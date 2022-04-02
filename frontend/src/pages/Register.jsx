import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../redux/features/authSlice'
import LoadingComponent from '../components/LoadingComponent'

const Register = () => {

  // * use State 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }

  }

  if (isLoading) {
    return <LoadingComponent />
  }

  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col col-lg-6 col-md-6 col-12">
          <div className="card" style={{ marginTop: "10%" }}>
            <div className="card-body">
              <p className="card-title mb-4" style={{ fontSize: "2rem" }}>Register</p>
              <form onSubmit={onSubmit}>

                <div className='form-group'>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder='You Full Name ...'
                      name='name'
                      value={name}
                      onChange={onChange}
                    />
                  </div>
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
                  <div className="mb-3">
                    <label className="form-label">Confirm password</label>
                    <input type="password" className="form-control" placeholder='Confirm Password ...'
                      name='confirmPassword'
                      value={confirmPassword}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <button type='submit' className='btn btn-block btn-md btn-primary'>REGISTER</button>
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

export default Register