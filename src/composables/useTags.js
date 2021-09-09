import { ref } from 'vue';

const useTags = (posts) => {
  const tags = ref(null);
  const tagsSet = new Set();

  posts.forEach((post) => tagsSet.add(...post.tags));
  tags.value = [...tagsSet];
  return { tags };
};

export default useTags;
