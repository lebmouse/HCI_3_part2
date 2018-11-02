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
      <v-divider></v-divider>
      <v-layout row wrap>
        <div>회사명 : {{workHistoryObj.company}}</div>
        <div>입사일 : {{workHistoryObj.date1}}</div>
        <div>퇴사일 : {{workHistoryObj.date2}}</div>
        <div>직급 : {{workHistoryObj.position}}</div>
        <div>담당업무 : {{workHistoryObj.responsibility}}</div>
        <div>퇴사사유 : {{workHistoryObj.leavingReason}}</div>
      </v-layout>
      <v-layout row wrap>
        <div>{{edcatationObj.univarcial}}</div>
        <div>{{edcatationObj.major}}</div>
        <div>{{edcatationObj.grades}}</div>
        <div>{{edcatationObj.date1}}</div>
        <div>{{edcatationObj.date2}}</div>
      </v-layout>
      <v-layout row wrap>
        <div>{{awardsObj.name}}</div>
        <div>{{awardsObj.contents}}</div>
        <div>{{awardsObj.agency}}</div>
        <div>{{awardsObj.date1}}</div>
      </v-layout>
      <v-layout row wrap>
        <div>이름 : {{skillsObj.name}}</div>
        <div>점수/등급 : {{skillsObj.grades}}</div>
        <div>발행처/기관 : {{skillsObj.agency}}</div>
      </v-layout>
      <v-layout row wrap>
        <div>기타</div>
        <div>{{othersObj}}</div>
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
    },
    othersObj(){
      return this.$store.state.othersObj
    }
  }
};
</script>

<style lang='css'>
</style>
