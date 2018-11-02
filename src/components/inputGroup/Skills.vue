<template>
  <div>
    <v-form v-for="(form,index) in formObj" :key="index">
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs3>
            <v-text-field v-model="form.name" label="이름"></v-text-field>
          </v-flex>
          <v-flex offset-xs1 xs3>
            <v-text-field v-model="form.grades" label="점수/등급"></v-text-field>
          </v-flex>
          <v-flex offset-xs1 xs3>
            <v-text-field v-model="form.agency" label="발행처/기관"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-btn small color="fail" @click="removeForm(index)">제거</v-btn>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
    </v-form>
    <v-btn @click="submit" color="primary">완료</v-btn>
    <v-btn color="success" @click="addForm">추가</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formObj: [
        {
          name: null,
          grades: null,
          agency: null
        }
      ]
    };
  },
  methods: {
    addForm() {
      this.formObj.push({
        name: null,
        grades: null,
        agency: null
      });
    },
    removeForm(index) {
      this.formObj.splice(index, 1);
    },
    submit() {
      this.$store.commit("nextStage");
      this.$store.commit("updateSkills",this.formObj);
    }
  }
};
</script>

<style lang='css'>
</style>
