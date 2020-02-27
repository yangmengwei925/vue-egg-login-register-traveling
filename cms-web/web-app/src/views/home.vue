<template>
  <div class="home">
    <Top />
    <router-view/>
  </div>
</template>

<script>

import Top from '@/components/top.vue'

export default {
  components: {
    Top
  }
}
</script>
<style scoped>
.home{
  min-width: 1180px;
}
</style>
