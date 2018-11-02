<template>
  <div>
    <v-form v-for="(form,index) in formObj" :key="index">
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs4>
            <v-text-field v-model="form.univarcial" label="대학교(대학원)"></v-text-field>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="form.major" label="전공"></v-text-field>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="form.grades" label="학점"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs3>
            <v-text-field v-model="form.date1" label="입학" hint="MM/DD/YYYY" persistent-hint prepend-icon="event"></v-text-field>
          </v-flex>
          <v-flex xs3>
            <v-text-field v-model="form.date2" label="졸업" hint="MM/DD/YYYY" persistent-hint prepend-icon="event"></v-text-field>
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
  data: vm => ({
    formObj: [
      {
        univarcial: null,
        major: null,
        grades: null,
        date1: null,
        date2: null
      }
    ]
  }),

  methods: {
    addForm() {
      this.formObj.push({
        univarcial: null,
        major: null,
        grades: null,
        date1: null,
        date2: null
      });
    },
    removeForm(index) {
      this.formObj.splice(index, 1);
    },
    submit() {
      this.$store.commit("nextStage");
      this.$store.commit("updateEducation", this.formObj);
    }
  }
};
</script>

<style lang='css'>
</style>
