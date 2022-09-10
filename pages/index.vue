<template> 
    <section class="container has-background-semitransparent  rounded-40px p-3 my-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ page.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <nuxt-content :document="page" />
          </div>
        </div>
      </div>
  </section>
</template>

<script> 

export default {
  async asyncData ({ $content }) {
    const page = await $content('about').fetch()
    return {
      page
    }
  }
}
</script>
