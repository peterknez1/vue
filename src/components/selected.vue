<template>
  <div align="left">Selected user: {{selectedUser}}</div>
</template>

<script>
    import store from '../states/store'
    export default {
        name: "selected",
      props: {
          selectedUser: ""
      }
    }
</script>

<style scoped>

</style>
