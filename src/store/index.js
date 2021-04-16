import { createStore } from 'vuex'
import client from 'api-client'
export default createStore({
  state: {
    posts: [
    ]
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
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
