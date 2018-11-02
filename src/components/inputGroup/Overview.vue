<template>
  <div>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs3>
          <img :src="basicInformationObj.image" width="210" height="280">
        </v-flex>
        <v-flex xs6>
          <div>이름 : {{basicInformationObj.name}}</div>
          <div>전화번호 : {{basicInformationObj.phone}}</div>
          <div>이메일 : {{basicInformationObj.email}}</div>
          <div>주소 : {{basicInformationObj.address}}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    basicInformationObj() {
      return this.$store.state.basicInformationObj;
    },
    workHistoryObj() {
      return this.$store.state.workHistoryObj;
    },
    edcatationObj() {
      return this.$store.state.edcatationObj;
    },
    awardsObj() {
      return this.$store.state.awardsObj;
    },
    skillsObj() {
      return this.$store.state.skillsObj;
    }
  }
};
</script>

<style lang='css'>
</style>
