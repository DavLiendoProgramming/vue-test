<template>
    <div class="w-full h-5/6 flex items-center justify-center">
        <form class="w-full md:w-1/3 xlg:w-1/2 bg-white rounded-lg flex items-center justify-center flex-col shadow-lg p-6">
                <div class="w-full mb-4">
                    <div class="flex items-center">
                        <input type='text' placeholder="Username"
                            class="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="w-full mb-4">
                    <div class="flex items-center">
                        <input type='text' placeholder="Password"
                            class="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <button type="submit"
                    class="w-24 py-2 rounded-full bg-blue-600 text-gray-100 hover:bg-blue-800 focus:outline-none">Log In</button>
        </form>
    </div>
</template>