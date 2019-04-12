<template>
  <div>
    <img :src=this.$data.profileImage>
    <p>Name: {{ this.$data.firstName + " " + this.$data.lastName}}</p>
    <p>Email: {{ this.$data.email}}</p>
    <p>Details: {{ this.$data.details }}</p>
    <router-link class="btn btn-info" :to="{
      path: '/home/',
      name: 'home'

    }">
    Go back
    </router-link>
    <button class="btn btn-info" v-on:click="changeMode"><div v-if="sneaky">Edit</div><div v-else>View</div></button>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" v-if="!sneaky"></ckeditor>
    <button v-on:click="submitDetails(editorData)" v-if="!sneaky">Submit</button>

  </div>
</template>
<script>
  import Data from '../data/users'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import store from '../states/store'
	export default{
    title: 'Details',
		name:'details',
		data(){
			return{
        editor: ClassicEditor,
        editorData: '<p>Rich-text editor content.</p>',
        editorConfig: {
          // The configuration of the rich-text editor.
        },
        id: "",
        users: this.$store.state.users,
        firstName: "",
        lastName: "",
        email: "",
        details: "",
        profileImage: "",
        sneaky: true

				 
			}
		},
    beforeMount() {
      this.loadData()
    },
    methods: {
		  loadData: function() {
		    console.log(this.$route.params.id);
		    let user = null;
		    for(let i = 0; i < this.$data.users.length; i++) {
            if(this.$data.users[i].id === this.$route.params.id) {
              user = this.$data.users[i];
            }
        }
		    this.$data.id = user.id;
		    this.$data.firstName = user.firstName;
		    this.$data.lastNake = user.lastName;
		    this.$data.email = user.email;
		    this.$data.details = user.details;
		    this.$data.profileImage = user.profileImage;
      },
      submitDetails: function (data) {
        data = data.replace(/<\/?[^>]+>/ig, " ");
        let dataToSend = [this.$data.id, data];
        this.details = data;
		    this.$store.commit('changeDetails', dataToSend);
      },
      changeMode: function () {
        this.$data.sneaky = !this.$data.sneaky;
      }
    },
    components: {

    }

  }
</script>
