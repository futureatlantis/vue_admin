<template>
    <div>
      <h1>this.is content</h1>
      <ul>
        <li v-for="item in list">
          <time v-text="$utils.goodTime(item.create_at)"></time>
          <router-link :to="'/ContentList/' + item.id">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "Content",
    data(){
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        let that = this
        this.$api.get('topics', null, res => {
          that.list = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>