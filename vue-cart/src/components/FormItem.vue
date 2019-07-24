<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="validateStatus === 'error'" class="error">{{errorMessage}}</p>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  inject: ["form"],
  props: ["label", "prop"],
  data() {
    return {
      validateStatus: "",
      errorMessage: ""
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  mounted() {
    if (this.prop) {
      this.$parent.$emit("formItemAdd", this);
    }
  },
  methods: {
    validate() {
      return new Promise(resolve => {
        const decriptor = { [this.prop]: this.form.rules[this.prop] };
        const validator = new schema(decriptor);
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          errors => {
            if (errors) {
              this.validateStatus = "error";
              this.errorMessage = errors[0].message;

              resolve(false)
            } else {
              this.validateStatus = "";
              this.errorMessage = "";

              resolve(true)
            }
          }
        );
      });
    }
  }
};
</script>

<style  scoped>
.error {
  color: red;
}
</style>