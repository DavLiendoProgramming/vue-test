<template>
  <div class="flex items-center flex-col">
    <header class="w-full container mx-auto">
      <div class="flex flex-col items-center py-6">
          <router-link class="font-bold text-gray-700 uppercase hover:text-gray-500 text-5xl" to="/">
              Dav Test blog
          </router-link>
          <p class="text-lg text-gray-600 pt-4">
              Hey there!
          </p>
      </div>
    </header>
    <post/>
    <form-post/>
  </div>
</template>
<script>
// @ is an alias to /src
import Post from "@/components/Post"
import FormPost from "@/components/FormPost"
export default {
  name: 'Home',
  components: {
    Post,
    FormPost
  }
}
</script>

    FormPost