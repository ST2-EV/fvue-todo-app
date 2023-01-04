<script>
import { signOut } from "firebase/auth";
import { where } from "firebase/firestore";
import { auth } from "../../firebase/credentials"
import { Todos } from "../../firebase/schemas/Todos"
import { useUserStore } from '../stores/user.js'
import { mapStores } from 'pinia'

export default {
  data() {
    return {
      title: "",
      todos: [],
    }
  },
  computed: {
		...mapStores(useUserStore)
	},
  methods: {
    signUserOut() {
      signOut(auth)
      .then(() => this.$router.push("/login"))
      .catch((error) => {
        console.log(error)
      });
    },
    async addUser(){
      await Todos.doc({
        "title": this.title,
        "madeBy": this.userStore.user.id,
        "done": false
      })
    },
    async del(todo) {
      await todo.delete();
    },
    async update(todo) {
      await todo.update();
    }
  },
  async mounted() {
    console.log(this.userStore.user.id)
    this.todos = await Todos.listen(where("madeBy", "==", this.userStore.user.id))
  }
}
</script>

<template>
  <section v-for="todo in todos" :key ="todo.id">
    <input v-model="todo.title" type="text" v-on:blur="update(todo)"/>
    <button @click.prevent="del(todo)">delete</button>
  </section>

  <input v-model="title" type="text" />
  <button @click.prevent="addUser">add</button>
  <button @click.prevent="signUserOut">logout</button>
</template>

<style>
section {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 1px black;
}
</style>