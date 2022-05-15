<template>
  <body class=" overflow-x-hidden">
    
    <header class=" h-[500px] background-mobile rounded-bl-[100px] lg:px-40 lg:background-desktop ">
      <nav class="flex pt-10 px-5 items-center justify-between">
        <h1 class=" text-white font-overpass text-3xl font-semibold lg:mr-10">Blogr</h1>
        <!--MOBILE-->
        <img v-show="!menu" @click="menu = !menu" class=" cursor-pointer lg:hidden" src="../blogr-landing-page-main/images/icon-hamburger.svg" alt="">
        <img v-show="menu" @click="menu = !menu" class=" cursor-pointer lg:hidden" src="../blogr-landing-page-main/images/icon-close.svg" alt="">
        <!--DESKTOP-->
        <ul class=" desktop-nav">
          <li class=" mr-5 flex relative">
            <h4 @click = "product = !product" :class="{'underline opacity-100' : product}">Product</h4>
            <img :class="{ 'rotate-180' : product}" class=" -ml-3  mt-2 h-2" src="../blogr-landing-page-main/images/icon-arrow-light.svg" alt="">
            <ul :class="{'absolute' : product, 'hidden' : !product}" class="desktop-float-list">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </li>

          <li class=" mr-5 flex">
            <h4 @click = "company = !company" :class="{'underline opacity-100' : company}">Company</h4>
            <img :class="{ 'rotate-180': company}" class=" -ml-3  mt-2 h-2" src="../blogr-landing-page-main/images/icon-arrow-light.svg" alt="">
            <ul :class="{'absolute' : company, 'hidden' : !company}" class=" nav-list">
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </li>

          <li class=" mr-5 flex">
            <h4 @click="connect = !connect" :class="{'underline opacity-100' : connect}">Connect</h4>
            <img :class="{'rotate-180' : connect}" class=" -ml-3  mt-2 h-2" src="../blogr-landing-page-main/images/icon-arrow-light.svg" alt="">
            <ul :class="{'absolute' : connect, 'hidden' : !connect}" class=" nav-list">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </li>          
        </ul>
          <button class=" hidden lg:flex">Login</button>
          <button class=" hidden lg:flex">Sign Up</button>
          
      </nav>
      <!--ARTICLE-->
      <article v-show="!menu" class=" mt-20 px-12">
        <h2 class=" font-overpass font-semibold text-white text-center text-3xl lg:text-6xl">A modern publishing platform</h2>
        <p class=" font-overpass text-base opacity-80 text-center text-white mt-2 lg:mt-8 lg:text-xl">Grow your audience and build your online brand</p>

        <section class=" font-ubuntu flex pb-32 mt-10 justify-evenly lg:justify-center">
          <button class=" bg-white font-bold text-md text-red rounded-full p-3 lg:mr-10 hover:bg-light-red hover:text-white ">Start for Free</button>
          <button class=" border-[1px] border-white rounded-full p-3 font-bold text-white hover:bg-white hover:text-light-red">Learn More</button>
        </section>
      </article>
      <!--MENU-->
      <transition name="fade">
      <article class=" bg-white mx-5 my-5 pt-5 rounded-md menu-shadow sticky z-10" v-show="menu">
        <ul class=" pb-1">
        
        <!--Product-->
          <li class=" mb-3">
            <header @click="product = !product" class=" flex items-center justify-center">
              <h2 class=" font-ubuntu font-medium text-lg text-dark">Product</h2>
              <img :class="{'rotate-180': product}" class=" ml-1 mt-1 h-2" src="../blogr-landing-page-main/images/icon-arrow-dark.svg" alt="">
            </header>
              <transition name="fade">
              <ul v-show="product" class=" bg-gray mx-5 mt-3 pt-3 pb-5 rounded-md mb-5">
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Overview</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Pricing</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Marketplace</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Features</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Integrations</li>
              </ul>
              </transition>
          </li>

          <!--Company-->
          <li class=" mb-3">
            <header @click="company = !company" class=" flex items-center justify-center">
              <h2 class=" font-ubuntu font-medium text-lg text-dark">Company</h2>
              <img :class="{'rotate-180': company}" class=" ml-1 mt-1 h-2" src="../blogr-landing-page-main/images/icon-arrow-dark.svg" alt="">
            </header>
              <transition name="fade">
              <ul v-show="company" class=" bg-gray mx-5 mt-3 pt-3 pb-5 rounded-md mb-5">
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">About</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Team</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Blog</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Careers</li>
              </ul>
              </transition>
          </li>
          <!--Connect-->
          <li class=" mb-3">
            <header @click="connect = !connect" class=" flex items-center justify-center">
              <h2 class=" font-ubuntu font-medium text-lg text-dark">Connect</h2>
              <img :class="{'rotate-180': connect}" class=" ml-1 mt-1 h-2" src="../blogr-landing-page-main/images/icon-arrow-dark.svg" alt="">
            </header>
              <transition name="fade">
              <ul v-show="connect" class=" bg-gray mx-5 mt-3 pt-3 pb-5 rounded-md mb-5">
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Contact</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">Newsletter</li>
                <li class=" text-center font-overpass font-semibold text-blue pt-2.5">LinkedIn</li>
              </ul>
              </transition>
          </li>
        </ul>
        <hr class="mx-5 text-gray">
        <footer class=" flex justify-center flex-col mt-3">
          <button class=" font-overpass text-lg font-semibold text-darker mx-auto mt-2 mb-3 py-2 px-6">Login</button>
          <button class=" font-overpass text-lg font-semibold text-white bg-gradient-to-r from-grad-a1 to-grad-a2 mx-auto mb-10 py-2 px-6 rounded-full">Sign Up</button>
        </footer>
      </article>
      </transition>
    
    </header>

    <main class=" mt-20">
      <h3 class=" font-overpass font-semibold text-center text-2xl text-blue px-12 lg:text-4xl">Designed for the future</h3>
      <img class=" mt-10 mx-auto lg:hidden" src="../blogr-landing-page-main/images/illustration-editor-mobile.svg" alt="">

      <article class="lg:flex">
        <div class="lg:mt-28 lg:mx-40">
          <h3 class="font-overpass font-semibold text-center text-2xl text-blue px-12 mt-10 lg:text-3xl lg:text-left lg:px-0">Introducing an extensible editor</h3>
          <p class=" font-overpass text-base opacity-80 text-center text-darker mt-2 px-9 lg:text-lg lg:text-left lg:px-0 lg:mt-5">Blogr features an exceedingly intuitive
            interface which lets you focus on one thing:
            creating content. The editor supports
            management of multiple blogs and allows easy
            manipulation of embeds such as images, videos
            and Markdown. Extensibility with plugins and 
            themes provide easy ways to add functionality
            or change the looks of a blog.
          </p>

          <h3 class="font-overpass font-semibold text-center text-2xl text-blue px-12 mt-10 lg:text-3xl lg:text-left lg:px-0 lg:mt-16">Robust content management</h3>
          <p class="font-overpass text-base opacity-80 text-center text-darker mt-2 px-9 lg:text-lg lg:text-left lg:px-0 lg:mt-5">
            Flexible content management enables users
            users to easily move through posts. Increase
            the usability of your blog by adding customuzed
            catogories, sections, format, or flow. With this
            functionality, you're in full control.

          </p>
        </div>
        <img class="hidden lg:flex w-1/2 h-1/2 mr-[-20%]" src="../blogr-landing-page-main/images/illustration-editor-desktop.svg" alt="">
      </article>

        <div class=" z-0 mt-40 background-mobile-phone rounded-tr-[6rem] rounded-bl-[6rem] relative">
         <img class=" -translate-y-36 mx-auto w-[350px]" src="../blogr-landing-page-main/images/illustration-phones.svg" alt="">
          <h2 class=" font-overpass font-light px-10 text-white text-center text-3xl -translate-y-28">State of the Art Infrastructure</h2>
          <p class=" font-overpass text-white text-center px-10 mt-10 opacity-80 -translate-y-24">
            With reliability and speed in mind,
            worldwide data centers provide the 
            backbone for ultra-fast connectivity.
            This ensures your site will load
            instantly, no matter where your readers
            are, keeping your site competitive.
          </p>
        </div>
        
        <img class=" mt-10 mx-auto lg:hidden " src="../blogr-landing-page-main/images/illustration-laptop-mobile.svg" alt="">
        
        <article class=" lg:flex lg:mt-28">
        <img class="hidden lg:flex lg:ml-[-20vw]" src="../blogr-landing-page-main/images/illustration-laptop-desktop.svg">

        <section class=" lg:mt-48">
          <h3 class="font-overpass font-semibold text-center text-2xl text-blue px-12 mt-10 lg:text-left lg:px-9">Free, open, simple</h3>
          <p class=" font-overpass text-base  text-center text-darker mt-2 px-9 lg:text-left lg:w-3/4 ">Blogr features an exceedingly intuitive
          Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as
          code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google 
          Analytics. The architecture is clean and is relatively easy to learn.
          </p>

          <h3 class="font-overpass font-semibold text-center text-2xl text-blue px-12 mt-10 lg:text-left lg:px-9">Powerful tooling</h3>
          <p class=" font-overpass text-base  text-center text-darker mt-2 px-9 lg:w-3/4 lg:text-left">
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable
          of producing even the most complicated sites.
          </p>
        </section>
        </article>
    </main>
    <footer class=" text-white bg-darker mt-20 py-20 text-center rounded-tr-[6rem] lg:flex lg:justify-evenly">
    <h1 class=" text-white font-overpass text-3xl font-semibold lg:text-4xl lg:mt-7 ">Blogr</h1>
    
    <section class=" lg:text-left">
      <h2 class=" mt-10">Product</h2>
      
      <div class=" mt-5 opacity-80">
        <h3 class=" cursor-pointer mt-2">Overview</h3>
        <h3 class=" cursor-pointer mt-2">Pricing</h3>
        <h3 class=" cursor-pointer mt-2" >Marketplace</h3>
        <h3 class=" cursor-pointer mt-2">Features</h3>
        <h3 class=" cursor-pointer mt-2">Integrations</h3>
      </div>
    </section>

    <section class=" lg:text-left">
      <h2 class=" mt-10">Company</h2>

      <div class=" mt-5 opacity-80">
        <h3 class=" cursor-pointer mt-2">About</h3>
        <h3 class=" cursor-pointer mt-2">Team</h3>
        <h3 class=" cursor-pointer mt-2">Blog</h3>
        <h3 class=" cursor-pointer mt-2">Careers</h3>
      </div>
    </section>

    <section class=" lg:text-left">
      <h2 class=" mt-10">Connect</h2>

      <div class=" mt-5 opacity-80">
        <h3 class=" cursor-pointer mt-2">Contact</h3>
        <h3 class=" cursor-pointer mt-2">Newsletter</h3>
        <h3 class=" cursor-pointer mt-2">LinkedIn</h3>
      </div>
    </section>

    </footer>
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

<style>
  .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>