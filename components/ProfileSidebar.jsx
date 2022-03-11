import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { BiChurch } from 'react-icons/bi';
import { RiGroup2Line } from 'react-icons/ri';
import { MdOutlineLocationOn } from 'react-icons/md';

function OrganizationProfileData(props) {

  
  const { profile, isError, message, isLoading } = useSelector((state) => state.profile)

  return (
    <div className='organizationProfileData'>
        <ul>
            <li className='liProfileData'> <BiChurch/> {profile.userName}  </li>
            {/* <li className='liProfileData'> <BiChurch/>  {props.data[0].userName} </li>
            <li className='liProfileData'> <AiOutlineMail/>  {props.data[0].email} </li>
            <li className='liProfileData'> <AiOutlineLink/>  {props.data[0].organization.website} </li>
            <li className='liProfileData'> <RiGroup2Line/>  Members: {props.data[0] !== undefined ?(props.data[0].organization.members.length):("no data")} </li>
            <li className='liProfileData'> <MdOutlineLocationOn/> {props.data[0].organization.locationCountry} </li> */}
        </ul>
    </div>
  )
}

export default OrganizationProfileData