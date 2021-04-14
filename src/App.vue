<template>
    <nav class="w-fullpy-4 bg-blue-800 shadow-md py-4">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

            <div>
                <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                    <li><router-link class="hover:text-blue-200 hover:underline px-4" to="/">Home</router-link></li>
                    <li><router-link class="hover:text-blue-200 hover:underline px-4" to="/about">About</router-link></li>
                </ul>
            </div>

            <ul class="flex items-center text-lg no-underline text-white pr-6">
              <li><router-link class="hover:text-gray-200 hover:underline px-4" to="/login">Login</router-link></li>
              <li><router-link class="hover:text-gray-200 hover:underline px-4" to="/register">Register</router-link></li>
            </ul>
        </div>
    </nav> 
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
