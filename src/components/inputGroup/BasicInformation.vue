<template>
  <v-form ref="form" v-model="valid">
    <v-layout row wrap>
      <v-flex xs5>
        <picture-input ref="pictureInput" @change="onChange" width="210" height="280" margin="10" accept="image/jpeg,image/png" size="8" buttonClass="btn" :customStrings="{upload: '<h1>Bummer!</h1>',drag: '사진을 클릭하거나 끌어주세요'}">
        </picture-input>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs5>
            <v-text-field v-model="name" :rules="nameRules" label="이름" required></v-text-field>
          </v-flex>
          <v-flex offset-xs4 xs3>
            <v-select :items="sexItems" v-model="sex" item-text="state" label="성별" required></v-select>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-text-field v-model="phone" :rules="phoneRules" label="전화번호" required></v-text-field>
        </v-layout>
        <v-layout row wrap>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-layout>
        <v-layout row wrap>
          <v-text-field v-model="address" :rules="addressRules" label="주소" required></v-text-field>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-btn @click="submit" color="primary">완료</v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import PictureInput from "vue-picture-input";

export default {
  components: {
    PictureInput
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      phone: "",
      phoneRules: [v => !!v || "phone number is required"],
      address: "",
      addressRules: [v => !!v || "address is required"],
      sexItems: [{ state: "남성", value: 0 }, { state: "여성", value: 1 }],
      sex: null,
      image: null
    };
  },
  computed: {
    ...mapState({
      stepIndex: "stepIndex"
    })
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.commit("nextStage");
        let obj = {
          image: this.image,
          name: this.name,
          sex: this.sex,
          phone: this.phone,
          email: this.email,
          address: this.address
        };
        this.$store.commit("updateBasicInformation",obj);
      }
    },
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    }
  }
};
</script>

<style lang='css'>
</style>
