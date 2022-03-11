import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { RiGroup2Line, RiSettings3Line } from 'react-icons/ri';
import { MdOutlineLocationOn, MdNotificationsNone } from 'react-icons/md';
import { VscSearch } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg'


function UserProfileLeft(props) {

    const handleSearch = () => {
        console.log(`searching`)
    }

  return (

    <div className='organizationProfileData'>
        <ul>
            <li className='liProfileData search'> <input className='searchTerm' size= "22" type="text" id="search" name="seach" placeholder='Search organizations or people' /> <button className='searchButton' onClick={handleSearch}> <VscSearch/> </button>  </li>
            <li className='liProfileData'> <MdNotificationsNone/> Notifications </li>
            <li className='liProfileData'> <AiOutlineMail/>  Messages</li>
            <li className='liProfileData'> <CgProfile/> <Link to={`/user/${props.userName}`}>Profile</Link> </li>
            <li className='liProfileData'> <RiSettings3Line/> Settings </li>
            <hr style={{height: 1}}/>
            <li className='liProfileData'> <RiGroup2Line/> Member of </li>
        </ul>

    </div>
  )
}

export default UserProfileLeft