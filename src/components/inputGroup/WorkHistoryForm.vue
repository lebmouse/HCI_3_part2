<template>
  <v-form>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs6>
          <v-text-field name="company" label="회사명"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-menu ref="menu1" :close-on-content-click="false" v-model="menu1" :nudge-right="40" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
            <v-text-field slot="activator" v-model="dateFormatted" label="입사일" hint="MM/DD/YYYY format" persistent-hint prepend-icon="event" @blur="date = parseDate(dateFormatted)"></v-text-field>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs3>
          <v-menu :close-on-content-click="false" v-model="menu2" :nudge-right="40" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
            <v-text-field slot="activator" v-model="computedDateFormatted" label="퇴사일" hint="MM/DD/YYYY format" persistent-hint prepend-icon="event" readonly></v-text-field>
            <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-text-field label="직급"></v-text-field>
      </v-layout>
      <v-layout row wrap>
        <v-textarea label="담당업무"></v-textarea>
      </v-layout>
      <v-layout row wrap>
        <v-textarea label="퇴사사유"></v-textarea>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
  </v-form>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    class: null
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style lang='css'>
</style>
