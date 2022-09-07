<template>
    <b-navbar class="has-background-semitransparent column container-rounded mb-4 px-4 py-2">
        <template #brand>
            <div class="container ">
                <div class="navbar-wrapper is-flex ">
                    <!-- <b-navbar-item  >
                    <button class=" mx-2 button is-link  is-uppercase" >
                      НОВОЯЗ  
                    </button>
                </b-navbar-item> -->
                    <NuxtLink :to="item.to" v-for="(item, key) of items" :key="key">
                        <button class="my-2 mx-2 button is-rounded is-uppercase"
                            v-bind:class="{ 'is-link': item.contrast, 'is-primary': !item.contrast }">
                            {{ item.title }}
                        </button>
                    </NuxtLink>

                </div>
            </div>


        </template>
    </b-navbar>
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
<style>

</style>