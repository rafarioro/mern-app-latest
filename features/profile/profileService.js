import axios from 'axios'

const API_URL = '/api/profile/'

// Create new post
const getProfileData = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, profileData, config)

  return response.data
}

const profileService = {
    getProfileData,
  }
  
  export default profileService