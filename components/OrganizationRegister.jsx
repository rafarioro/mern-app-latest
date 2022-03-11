import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { registerOrganization, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function OrganizationRegister() {
    const [organizationFormData, setOrganizationFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        website: '',
        locationCity: '',
        locationState: '',
        locationCountry: '',
        password: '',
        password2: '',
      })
    
      const { fullName, userName, email, website, locationCity, locationState, locationCountry, password, password2 } = organizationFormData
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setOrganizationFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        if (password !== password2) {
          toast.error('Passwords do not match')
        } else {
          const organizationData = {
            fullName, userName, email, website, locationCity, locationState, locationCountry, password, password2 
          }
    
          dispatch(registerOrganization(organizationData))
        }
      }
    
      if (isLoading) {
        return <Spinner />
      }
    
      return (
        <>

    
          <section className='form'>
            <form onSubmit={onSubmit}>

            <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='fullName'
                  name='fullName'
                  value={fullName}
                  placeholder='Enter Your Full Organization Name'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='userName'
                  name='userName'
                  value={userName}
                  placeholder='Choose a Unique User Name'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='website'
                  name='website'
                  value={website}
                  placeholder='Enter Your Organization Website'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='locationCity'
                  name='locationCity'
                  value={locationCity}
                  placeholder='City'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='locationState'
                  name='locationState'
                  value={locationState}
                  placeholder='state'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='locationCountry'
                  name='locationCountry'
                  value={locationCountry}
                  placeholder='Country'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password2'
                  name='password2'
                  value={password2}
                  placeholder='Confirm password'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Submit
                </button>
              </div>
            </form>
          </section>
        </>
      )
}

export default OrganizationRegister