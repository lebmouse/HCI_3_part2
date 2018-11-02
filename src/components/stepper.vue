<template lang='html'>
<v-stepper v-model="stepIndex">
    <v-stepper-header>
        <v-stepper-step editable step="1">Basic Infromation</v-stepper-step>        
        <v-stepper-step editable step="2">Work History</v-stepper-step>        
        <v-stepper-step editable step="3">Education</v-stepper-step>        
        <v-stepper-step editable step="4">Awards</v-stepper-step>        
        <v-stepper-step editable step="5">Skills</v-stepper-step>        
        <v-stepper-step editable step="6">Others</v-stepper-step>        
        <v-stepper-step editable step="7">Overview</v-stepper-step>        
    </v-stepper-header>
    <v-stepper-items>
        <v-stepper-content step="1">
            <basicInformation></basicInformation>
        </v-stepper-content>
        <v-stepper-content step="2">
            <workHistory></workHistory>
        </v-stepper-content>
        <v-stepper-content step="3">
            <education></education>
        </v-stepper-content>
        <v-stepper-content step="4">
            <awards></awards>
        </v-stepper-content>
        <v-stepper-content step="5">
            <skills></skills>
        </v-stepper-content>
        <v-stepper-content step="6">
            <others></others>
        </v-stepper-content>
        <v-stepper-content step="7">
            <overview></overview>
        </v-stepper-content>
    </v-stepper-items>
</v-stepper>
</template>

<script>
import basicInformation from "./inputGroup/BasicInformation";
import awards from "./inputGroup/Awards.vue";
import education from "./inputGroup/Education.vue";
import others from "./inputGroup/Others.vue";
import overview from "./inputGroup/Overview.vue";
import skills from "./inputGroup/Skills.vue";
import workHistory from "./inputGroup/WorkHistory.vue";
export default {
  components: {
    basicInformation,
    awards,
    education,
    others,
    overview,
    skills,
    workHistory
  },
  data() {
    return {};
  },
  computed: {
    stepIndex:{
        get(){
            return this.$store.state.stepIndex
        },
        set(value){
            this.$store.commit('updateStep',value)
        }
    }
  }
};
</script>

<style lang='css'>
</style>
