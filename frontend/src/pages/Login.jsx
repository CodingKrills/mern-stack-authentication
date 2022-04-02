import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../redux/features/authSlice'
import LoadingComponent from '../components/LoadingComponent'

const Login = () => {

  // * use State 
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      // alert(isError)
      setShowAlert(true)
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
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
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
              <p className="card-text"></p>
              {showAlert ?
                <>
                  <div className="alert alert-danger">
                    {message}
                  </div>
                </>
                :
                <>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login