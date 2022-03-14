<template>
  <div>文章</div>
</template>

<script>
export default {
  created() {
    this.$api.getArticle().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
</style>