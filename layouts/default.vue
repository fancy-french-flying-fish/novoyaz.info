<template>
  <section class="container pt-4 is-max-desktop">
    <div class="mx-2 is-main">
      <NavBar/>
    <div class="my-4">
      <div class="container-rounded">
        <Nuxt />
      </div>
    </div>
    </div>
  </section>
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
<style scoped>
.menu-list a:hover, .menu-list a.is-active, .menu_links-rounded {
  border-radius: 40px;
}

.is-main {
  min-height: 100vh;
}
</style>