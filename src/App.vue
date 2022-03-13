<template>
  <body>
    
    <header class=" h-[500px] background-mobile rounded-bl-[100px] ">
      <nav class=" flex pt-10 px-5 items-center justify-between">
        <h1 class=" text-white font-overpass text-3xl font-semibold">Blogr</h1>
        <img v-show="!menu" @click="menu = !menu" class="" src="../blogr-landing-page-main/images/icon-hamburger.svg" alt="">
        <img v-show="menu" @click="menu = !menu" src="../blogr-landing-page-main/images/icon-close.svg" alt="">
      </nav>
      <!--ARTICLE-->
      <article v-show="!menu" class=" mt-20 px-12">
        <h2 class=" font-overpass font-semibold text-white text-center text-3xl">A modern publishing platform</h2>
        <p class=" font-overpass text-base opacity-80 text-center text-white mt-2">Grow your audience and build your online brand</p>

        <section class=" font-ubuntu flex pb-32 mt-10 justify-evenly">
          <button class=" bg-white font-bold text-md text-red rounded-full p-3 ">Start for Free</button>
          <button class=" border-[1px] border-white rounded-full p-3 font-bold text-white">Learn More</button>
        </section>
      </article>
      <!--MENU-->
      <article class=" bg-white mx-5 my-5 pt-5 rounded-md menu-shadow" v-show="menu">
        <ul class=" pb-1">
        
        <!--Product-->
          <li class=" mb-3">
            <header @click="product = !product" class=" flex items-center justify-center">
              <h2 class=" font-ubuntu font-medium text-lg text-dark">Product</h2>
              <img :class="{'rotate-180': product}" class=" ml-1 mt-1 h-2" src="../blogr-landing-page-main/images/icon-arrow-dark.svg" alt="">
            </header>

              <ul v-show="product" class=" bg-gray mx-5 mt-3 pt-3 pb-5 rounded-md mb-5">
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Overview</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Pricing</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Marketplace</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Features</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Integrations</li>
              </ul>
          </li>

          <!--Company-->
          <li class=" mb-3">
            <header @click="company = !company" class=" flex items-center justify-center">
              <h2 class=" font-ubuntu font-medium text-lg text-dark">Company</h2>
              <img :class="{'rotate-180': company}" class=" ml-1 mt-1 h-2" src="../blogr-landing-page-main/images/icon-arrow-dark.svg" alt="">
            </header>

              <ul v-show="company" class=" bg-gray mx-5 mt-3 pt-3 pb-5 rounded-md mb-5">
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">About</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Team</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Blog</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Careers</li>
              </ul>
          </li>
          <!--Connect-->
          <li class=" mb-3">
            <header @click="connect = !connect" class=" flex items-center justify-center">
              <h2 class=" font-ubuntu font-medium text-lg text-dark">Connect</h2>
              <img :class="{'rotate-180': connect}" class=" ml-1 mt-1 h-2" src="../blogr-landing-page-main/images/icon-arrow-dark.svg" alt="">
            </header>

              <ul v-show="connect" class=" bg-gray mx-5 mt-3 pt-3 pb-5 rounded-md mb-5">
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Contact</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Newsletter</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">LinkedIn</li>
              </ul>
          </li>
        </ul>
        <hr class="mx-5 text-gray">
        <footer class=" flex justify-center flex-col mt-3">
          <button class=" font-overpass text-lg font-semibold text-darker mx-auto mt-2 mb-3 py-2 px-6">Login</button>
          <button class=" font-overpass text-lg font-semibold text-white bg-gradient-to-r from-grad-a1 to-grad-a2 mx-auto mb-10 py-2 px-6 rounded-full">Sign Up</button>
        </footer>
      </article>


    </header>

  </body>
</template>


<script>
  export default {
    data() {
      return {
        menu: false,
        product: false,
        company: false,
        connect: false,
      }
    },
  }
</script>