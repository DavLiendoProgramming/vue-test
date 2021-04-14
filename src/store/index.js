import { createStore } from 'vuex'
import client from 'api-client'
export default createStore({
  state: {
    posts: [
      { title: 'Post Title 1' },
      { title: 'Post Title 2' },
      { title: 'Post Title 3' },
      { title: 'Post Title 4' },
      { title: 'Post Title 5' }
    ]
  },
  mutations: {
  },
  actions: {
    fetchPosts ({ commit }) {
      return client
        .fetchPosts()
        .then(posts => commit('setPosts', posts))
    }
  },
  modules: {
  }
})
