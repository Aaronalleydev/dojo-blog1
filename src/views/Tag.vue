<template>
  <div class="tag">
      <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts"
import PostList from "@/components/PostList.vue"
import TagCloud from "@/components/TagCloud.vue"
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'


export default {
    components: { PostList, TagCloud, TagCloud },
setup() {
    const route = useRoute()
    const {posts, error, load} = getPosts()

    load()

    const postsWithTag = computed(() => {
        return posts.value.filter(p => p.tags.includes(route.params.tag))
    })

        return { posts, error, postsWithTag };
    }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>