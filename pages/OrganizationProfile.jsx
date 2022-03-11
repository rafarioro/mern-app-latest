// import { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import ProfilePostForm from '../components/OrgProfilePostForm'
// import Spinner from '../components/Spinner';
// import ProfileSidebar from '../components/ProfileSidebar'
// import { getOrganizationData, reset } from '../features/organization/organizationSlice'
// import OrganizationViewSelect from '../components/OrganizationViewSelect';


// function OrganizationProfile() {
//     let { organizationName } = useParams();
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     const { user } = useSelector((state) => state.auth)

//     const { organization, isError, message, isLoading } = useSelector((state) => state.organization)
//     //organization[0] is the object ^

//     useEffect(() => {
//         if (isError) {
//             toast.error(message)
//           }
//         if (!user) {  navigate('/login') }

//         dispatch(getOrganizationData({userName: organizationName}))  //change to profile name

//         return () => {
//             dispatch(reset())
//         }
        
//     }, [user, navigate, isError, message, dispatch, organizationName])

//     if (isLoading) {
//         return <Spinner />
//       }


//   return (
//     <>
//         <h1>{organization[0] && organization[0].isOrganization === true ? (organization[0].fullName) : (<Spinner/>)}</h1>
    
//         <div className='ProfileRow'>
//             <div className='profileColumn'>
//                 {organization[0] ? ( <ProfileSidebar data = {organization}  />) : (<Spinner/>)}
//             </div>
//             <div className='profileColumn'>
//                 {organization[0] ?  (  <OrganizationViewSelect data={organization[0]} />) : (<Spinner/>)}
//             </div>
//             <div className='profileColumn'>
//                 <ProfilePostForm name={organizationName} />
//             </div>
//         </div>
//     </>
//   )
// }
// export default OrganizationProfile