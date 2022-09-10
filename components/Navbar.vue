<template>

    <nav class="navbar has-background-semitransparent column container-rounded mb-4 px-4 py-2" role="navigation"
        aria-label="main navigation">
        <div class="is-transparent is-shadowless">
            <div class="navbar-start is-flex " >
                <div class="is-logo has-text-weight-bold gradient-animation my-2 mr-2 button is-rounded is-uppercase ">
                    <!-- <img id="svglogo" src = "/hr.svg" alt="Новояз Россия 2022"/> -->
                    <object data="/hr.svg" fill="white" width="42px" height="42px"> </object>
                </div>
                <NuxtLink :to="item.to" v-for="(item, key) of items" :key="key">
                    <button class="navbar-item my-2 mr-2 button is-rounded is-uppercase"
                        v-bind:class="{ 'is-link': item.contrast, 'is-primary': !item.contrast }">
                        {{ item.title }}
                    </button>
                </NuxtLink>
            </div>

            <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
        </div>
    </nav>

</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            items: [
                {
                    title: 'Новояз Словарь',
                    icon: 'lightbulb',
                    contrast: true,
                    to: { name: 'dictionary' }
                },
                {
                    title: 'О проекте',
                    icon: 'home',
                    to: { name: 'index' }
                }

            ]
        }
    }
}
</script>
<style scoped>
/* #svglogo {
    width: 2.25rem !important;
    height: 2.25rem !important;
} */

</style>