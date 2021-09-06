<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="tagPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import { computed } from "@vue/reactivity";
export default {
  components: { PostList, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const tagPosts = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag))
    );

    return {
      tagPosts,
      posts,
      error,
    };
  },
};
</script>

<style>
</style>