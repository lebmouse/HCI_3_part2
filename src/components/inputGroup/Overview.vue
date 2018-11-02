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
      <v-layout row wrap v-for="(form,index1) in workHistoryObj" :key="index1" >
        <div>회사명 : {{form.company}}</div>
        <div>입사일 : {{form.date1}}</div>
        <div>퇴사일 : {{form.date2}}</div>
        <div>직급 : {{form.position}}</div>
        <div>담당업무 : {{form.responsibility}}</div>
        <div>퇴사사유 : {{form.leavingReason}}</div>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap  v-for="(form,index2) in edcatationObj" :key="index2">
        <div>대학교(대학원) : {{form.univarcial}}</div>
        <div>전공 : {{form.major}}</div>
        <div>성적 : {{form.grades}}</div>
        <div>입학일 : {{form.date1}}</div>
        <div>졸업일 : {{form.date2}}</div>
      </v-layout>
      <v-divider></v-divider>

      <v-layout row wrap  v-for="(form,index3) in awardsObj" :key="index3">
        <div>{{form.name}}</div>
        <div>{{form.contents}}</div>
        <div>{{form.agency}}</div>
        <div>{{form.date1}}</div>
      </v-layout>
      <v-divider></v-divider>

      <v-layout row wrap  v-for="(form,index4) in skillsObj" :key="index4">
        <div>이름 : {{form.name}}</div>
        <div>점수/등급 : {{form.grades}}</div>
        <div>발행처/기관 : {{form.agency}}</div>
      </v-layout>
      <v-divider></v-divider>

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
