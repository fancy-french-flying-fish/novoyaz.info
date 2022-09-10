<template>
  <div
    class=""
  >
      <section class="container has-background-semitransparent rounded-40px p-3 my-4">
        <SearchForm @searchquery="applySearch"/>
      </section>
      <section class="container has-background-semitransparent  rounded-40px p-3 my-4">
        <Card
        v-for="word of dictionary" 
        :key="word.slug"
        :title="word.title"
        :usage="word.usage"
        :slug="word.slug"
        :status="word.status"
        class="mb-2"
        >
          <!-- <h2 class="">
            <nuxt-link :to="`/dictionary/${word.slug}`">
              <h2 class="is-size-2">{{ word.title }}</h2>
            </nuxt-link>
          </h2> -->
        </Card>
      </section>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import Card from '@/components/Card.vue';
export default {
  data() {
    return {
      query: '',
      dictionary: [],
    }
  },
  components:{SearchForm, Card},
  methods:{
    applySearch(query) {
      this.query = query;
      console.log(query)
    }
  },
  async fetch() {
    if (!this.query) {
      this.dictionary = await this.$content("dictionary").fetch()
      return
    }
    this.dictionary = await this.$content("dictionary").search(this.query).fetch()
  },
  watch: {
    query: '$fetch',
  },
}
</script>
