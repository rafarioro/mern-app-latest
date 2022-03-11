import axios from 'axios'
const API_URL = '/api/posts/'

// Create new post
const setPostOrganization = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(`${API_URL}organization`, postData, config)
  return response.data
}

// Create new post
const setPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(`${API_URL}user`, postData, config)
  return response.data
}

// Get posts
/// for now we will just try to adda new post
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

// Get  organization posts
/// for now we will just try to adda new post
const getOrganizationPosts = async (organization, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(`${API_URL}getOrganizationPosts`, organization, config)
  return response.data
}

// Get  organization posts
/// for now we will just try to adda new post
const getProfilePosts = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(`${API_URL}getProfilePosts`, profileData, config)
  return response.data
}

// Delete user post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + postId, config)
  return response.data
}
const postService = { setPostOrganization, setPost, getPosts, getOrganizationPosts, getProfilePosts, deletePost }
export default postService
