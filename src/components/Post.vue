<template>
  <div class="home">
    <span v-if="loading">Loading…</span>
    <section  v-else class="w-full md:w-2/3 flex flex-col items-center justify-center px-3 mx-auto">
        <ul
            class="flex flex-col items-center justify-center"
            >

            //Gives you accessto the computed variable, iterates over it and renders it
            <li
                v-for="post in posts"
                :key="post.title"
                class="post-item shadow-md p-6 rounded-md my-3"
            >
                <h1 class="text-left text-2xl text-gray-800  py-3 font-bold">{{ post.title }}</h1>
                <p class="text-justify py-1 text-gray-500">{{post.body}}</p>
                <h3 class="text-gray-600 text-xs text-left mt-1">{{post.pubDate}}  </h3>
            </li>
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    posts () {
      return this.$store.state.posts
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        this.loading = false;
        console.log(posts)
      })
  }
}
</script>

<style scoped>
.posts {
  list-style: none;
  text-align: left;
}

.post-item + .post-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>