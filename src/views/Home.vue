<template>
<div>

    <header class="w-full container mx-auto">
      <div class="flex flex-col items-center py-6">
          <router-link class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" to="/">
              Dav Test blog
          </router-link>
          <p class="text-lg text-gray-600 pt-4">
              hey
          </p>
      </div>
    </header>
    <post/>
</div>
</template>
<script>
// @ is an alias to /src
import Post from "@/components/Post"
export default {
  name: 'Home',
  components: {
    Post
  }
}
</script>
