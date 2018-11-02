<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-textarea v-model="contents" hint="자유롭게 기입하세요" auto-grow box></v-textarea>
    </v-layout>
    <v-btn @click="submit" color="primary">완료</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contents: ""
    }
  },
  methods: {
    submit() {
      this.$store.commit("nextStage");
      this.$store.commit("updateOthers",this.contents);
    }
  }
};
</script>

<style lang='css'>
</style>
