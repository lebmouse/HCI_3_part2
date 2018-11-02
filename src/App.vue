<template>
  <v-app>
    <v-toolbar>
      <v-layout row wrap>
        <v-flex offset-xs1>
          <v-toolbar-title v-text="title"></v-toolbar-title>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: 'HCI Resume'
      }
    },
  }
</script>
