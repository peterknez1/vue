

<template>
  <div>
    <selected :selectedUser= $store.state.selected />
    <div class="card" style="width: 18rem" v-for="user in $store.state.users" :key="user.id">
      <User
        v-bind:id=user.id
        v-bind:firstName=user.firstName
        v-bind:lastName=user.lastName
        v-bind:email=user.email
        v-bind:profileImage=user.profileImage
        v-bind:details=user.details
      />
      <p></p>
    </div>
  </div>
</template>

<script>
  import Data from '../data/users.json'
  import User from './user'
  import store from '../states/store'
  import selected from './selected'
export default {
  name: 'home',
  data () {
    return {
      title: 'Users',
      users: this.$store.state.users,
      selected: this.$store.state.selected
    }
  },
  methods:{

  },
  components: {
    User,
    selected
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
</style>
