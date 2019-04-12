<template>

  <div>
      <img class="card-img-top"  :src=this.profileImage alt="Card image cap">
      <div class="card-body">
        <p>Id: {{ this.id }}</p>
        <p>Name: {{ this.firstName + " " + this.lastName}}</p>
        <p>Email: {{this.email}}</p>
        <p>Details: {{ details1 }}</p>
        <p><button v-on:click=changeName() class="btn btn-primary text-white">Change name</button></p>
        <p><button v-on:click=select() class="btn btn-primary text-white">Select</button></p>
        <p><button v-on:click=createUser(id) class="btn btn-primary text-white">Export as CSV</button></p>
        <router-link class="btn btn-primary text-white" :to="{
          path: '/details/',
          name: 'details',
          params: {
            id: this.id
          }
        }"
        >
        Details
        </router-link>
      </div>
    </div>
    
</template>

<script>
    import store from '../states/store'
    export default {
        name: "user",
        props: {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            profileImage: "",
            details: ""
        },
      data: function () {
          return {
            id: "",
            details1: "",
            user: ""
          }
      },

      beforeMount () {
          this.onLoad();
      },
      methods: {
        onLoad: function () {
              this.$data.details1 = this.details.substring(0, 200);
          },
        select: function () {
            this.$store.commit('changeSelected', [this.firstName, this.lastName]);
        },
        changeName: function () {
          this.$store.commit('changeName', this.id);
        },
        createUser(id) {
          let user = null;
          console.log("create user", id);
          console.log(this.$store.state.users);
          for(let i = 0; i < this.$store.state.users.length; i++) {
            if(this.$store.state.users[i].id == id) {
                console.log(true);
                user = this.$store.state.users[i];
                console.log(user);
            }
          }
          this.exportCsv(user);
        },
        objectToCsv(user) {

          var headers = Object.keys(user);
          var values = Object.values(user);
          values = values.map(value => value.replace(/<\/?[^>]+(>|$)/g, "").replace(/"/g, '""'));
          const csvRows = [];
          csvRows.push('"' + headers.join('","') + '"');
          csvRows.push('"' + values.join('","') + '"');
          return "sep=,\n"  + csvRows.join("\n");

        },
        download(data, firstName){

          const blob = new Blob([data], { type: 'text/csv; charset=UTF-8' , encoding: 'UTF-8'} );
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.setAttribute('download', firstName + ".csv");
          a.setAttribute('hidden' , '');
          a.setAttribute('href' , url);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

        },
        exportCsv(user) {
          console.log(user);
          const csvData = this.objectToCsv(user);
          this.download(csvData, user.firstName);
        }
      }
    }
</script>

<style scoped>

</style>
