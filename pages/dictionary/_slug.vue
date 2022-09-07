<template>
  <div class="section">
    <div v-if="post" class="card p-6">
      <div v-if="post.title"  class="is-flex is-justify-content-space-between">
        <h1 class="is-size-2">{{ post.title }}</h1>
        <span class="flag big red" />
      </div>
      <div v-if="post.usage" class="content">
        <div class="py-4">
          <p>
            {{ post.usage}}
          </p>
        </div>
        <div v-if="post.links">
          <h4 class="is-size-5">Примеры использования:</h4>
          <ul>
            <li v-for="(p, key) of post.links.split(' ')" :key="p">
              <a target="_blank" rel=”nofollow”  :href="p">Ссылка {{key + 1}}</a>
            </li>
          </ul>
        </div>
        <!-- <nuxt-content :document="post"/> -->

      </div>
      <div class="">
        <nuxt-link to="/dictionary" class="hover:underline">
          <button class="button is-rounded is-link">К словарю</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    }
  },
  async fetch() {
    this.post = (
      await this.$content("dictionary")
        .where({ slug: this.$route.params.slug })
        .limit(1)
        .fetch()
    )?.[0]
  },
}
</script>