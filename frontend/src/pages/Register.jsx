import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
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
  const [inputValid, setInputValid] = useState('');

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      alert(message)
      setInputValid('is-invalid')
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
                    <input type="text" className={`form-control ${inputValid}`} placeholder='You Full Name ...'
                      name='name'
                      value={name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className={`form-control ${inputValid}`} placeholder='Your Email Address ...'
                      name='email'
                      value={email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your password</label>
                    <input type="password" className={`form-control ${inputValid}`} placeholder='Your Password ...'
                      name='password'
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm password</label>
                    <input type="password" className={`form-control ${inputValid}`} placeholder='Confirm Password ...'
                      name='confirmPassword'
                      value={confirmPassword}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <button type="submit" class="btn btn-block btn-outline-dark active btn-animated btn-animated-x" style={{ borderRadius: "0" }}>
                    <span class="btn-inner--visible">Register</span>
                    <span class="btn-inner--hidden"><i class="fas fa-arrow-right"></i></span>
                  </button>
                </div>
                <p>Already An User ? <Link to='/login'> Login Now</Link></p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register