<template>
  <div>
    <v-form>
      <v-container grid-list-xs v-for="(form,index) in formObj" :key="index">
        <v-layout row wrap>
          <v-flex xs6>
            <v-text-field v-model="form.company" label="회사명"></v-text-field>
          </v-flex>
          <v-flex xs3>
            <v-text-field v-model="form.date1" label="입사일" hint="MM/DD/YYYY" persistent-hint prepend-icon="event"></v-text-field>
          </v-flex>
          <v-flex xs3>
            <v-text-field v-model="form.date2" label="퇴사일" hint="MM/DD/YYYY" persistent-hint prepend-icon="event"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-text-field v-model="form.position" label="직급"></v-text-field>
        </v-layout>
        <v-layout row wrap>
          <v-textarea v-model="form.responsibility" label="담당업무"></v-textarea>
        </v-layout>
        <v-layout row wrap>
          <v-textarea v-model="form.leavingReason" label="퇴사사유"></v-textarea>
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
        company: null,
        date1: null,
        date2: null,
        position: null,
        responsibility: null,
        leavingReason: null
      }
    ]
  }),
  methods: {
    addForm() {
      this.formObj.push({
        company: null,
        date1: null,
        date2: null,
        position: null,
        responsibility: null,
        leavingReason: null
      });
    },
    removeForm(index) {
      this.formObj.splice(index, 1);
    },
    submit() {
      this.$store.commit("nextStage");
      this.$store.commit("updateWorkHistory", this.formObj);
    }
  }
};
</script>

<style lang='css'>
</style>
