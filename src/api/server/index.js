import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL
})

export default {
  async getPost(postId){
    try {
      const { data } = await api.get(`posts/${postId}`)
    } catch (err) {
      console.error(err)
    }
  },
  async getPosts() {
    try {
      const { data } = await api.get('posts')
      return data
    } catch (err) {
      console.error(err)
    }
  },
   async savePost(data) {
    try {
      const response = await api.post('posts',data)
      return  response ;
    } catch (err) {
      console.error(err)
    }
  },
  async updatePost(postId, data) {
    try {
      const response = await api.put(`posts/${postId}`,  data)
      return response
    } catch (err) {
      console.error(err)      
    }
  },
  async deletePost (postId) {
    try {
      const response = await api.delete(`posts/${postId}`)
      return response
    } catch (err) {
      console.error(err)
    }
  }
}