<template>
  <div class="container mx-2 is-max-desktop">
    <NavBar/>
    <section class="my-4">
      <div class=" container-rounded ">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
export default {
  name: 'DefaultLayout',
  components:{NavBar},
  data () {
    return {
      items: [
        {
          title: 'О проекте',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Словарь',
          icon: 'lightbulb',
          to: { name: 'dictionary' }
        }
      ]
    }
  }
}
</script>
<style>
.menu-list a:hover, .menu-list a.is-active, .menu_links-rounded {
  border-radius: 40px;
}


body {
    margin: 0 !important;
    padding: 0 !important;
  background: linear-gradient(331deg, rgba(221,221,221,1) 0%, rgba(0,131,214,1) 50%, rgba(221,221,221,1) 100%); 
}
</style>