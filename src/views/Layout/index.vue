<template>
  <div>
    <Mynav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Mynav from '@/components/mynav.vue'
export default {
  components: {
    Mynav
  }
}
</script>

<style>

</style>