import axios from 'axios'

const API_URL = '/api/organization/'

// Create new post
const getOrganizationData = async (organizationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, organizationData, config)

  return response.data
}

const organizationService = {
    getOrganizationData,
  }
  
  export default organizationService