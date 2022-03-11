import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import UserRegister from '../components/UserRegister'
import OrganizationRegister from '../components/OrganizationRegister'

function Register() {
const [userType, setUserType] = useState('singleUser')

useEffect(()=> { 

}, [userType])

console.log(userType)
 return (
    <>
      <h1>
        <FaUser /> Register
      </h1>
      <section className='heading'>

          </section>
      <section className='form'>
        <div className='form-group'>
          <label htmlFor='userType'>Who are you?</label>
            <select onChange={(e) => setUserType(e.target.value)}>
              <option value="singleUser">Single User</option>
              <option value="organization">Organization</option>
            </select>
        </div>
      </section>

    {userType === 'singleUser' ? (<UserRegister/>):(<OrganizationRegister/>)}

      
    </>
    )
}

export default Register
