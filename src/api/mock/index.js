import posts from './data/posts'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchPosts () {
    return fetch(posts, 1000) // wait 1s before returning posts
  },
  async createPost(post){
    let posts = await fetch(posts,500);
    return {...posts, post}
  }
}