<template>
  <div class="">
    <div class="card ">
      <nuxt-link :to="`/dictionary/${slug}`">
      <header class="is-flex card-header">
        <FlagComponent :color="getFlagColorStyle"/>
        <h2 class="card-header-title is-size-4 has-text-primary has-text-weight-light is-uppercase">
          {{ title }} 
        </h2>
      </header>
      </nuxt-link>
      <div class="card-content">
        <div class="content px-4">
          <p class="has-text-weight-light">
            {{ usage }}
          </p>
        </div>
      </div>
      <!-- <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer> -->
    </div>
  </div>
</template>

<script>
import FlagComponent from '@/components/FlagComponent.vue'
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    usage: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      required: true
    }
  },
  methods:{
  },
  components:{FlagComponent},
  computed:{
    getFlagColorStyle(){
      if (this.status < 4) {
        return 'green'
      } else if (this.status >=4 && this.status < 8) {
        return 'yellow'
      } else if ( this.status >=8) {
        return 'red'
      }
      return ''
    }

  }
}
</script>
