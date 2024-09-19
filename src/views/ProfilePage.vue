<template>
  <div
    class="w-full h-screen bg-[url('../assets/img/home.jpg')] bg-cover bg-center overflow-scroll"
  >
  <div class="w-full h-full pt-32 flex flex-col justify-around items-center gap-20 bg-black/60 overflow-scroll pb-20">
    <div
      class="py-6 px-16 border border-dark-grey flex items-center bg-grey/80 gap-20 w-1/2"
    >
      <div class="space-y-2">
        <p class="text-xs text-red">Имя пользователя</p>
        <p class="text-xs text-black/60">rwerrx</p>
      </div>
      <div class="space-y-2">
        <p class="text-xs text-red">email</p>
        <p class="text-xs text-black/60">sdjhfdsjfdsu@djfnehiehr</p>
      </div>
      <img src="../assets/img/user.png" class="w-[3rem]" alt="" />
    </div>
    <div class="gap-x-20 gap-y-10 flex flex-wrap my-0 mx-auto w-11/12">
      <div
        v-for="i in 8"
        class="w-[45rem] bg-dark-grey/70 px-10 py-2 gap-10 items-center flex border-2 border-dark-grey/50 hover:bg-red/0 hover:border-red cursor-pointer"
      >
        <span class="text-white">Python</span>
        <div
          class="w-full h-[1rem] bg-grey flex items-center border-4 border-grey"
        >
          <div class="w-1/2 h-full bg-red"></div>
        </div>
        <span class="">50%</span>

        <img src="../assets/gif/knight.webp" class="w-[10rem]" alt="" />
      </div>
    </div>
  </div>
   
  </div>
</template>
