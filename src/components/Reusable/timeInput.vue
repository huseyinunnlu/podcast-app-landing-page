<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    ErrorMessage,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      data: this.modelValue,
    };
  },
  watch: {
    // modelValue(value) {
    //   this.data = value;
    // },
  },
  props: {
    modelValue: {},
    name: { type: String, required: true },
    label: { type: String, default: "" },
    rules: { type: String, default: "" },
    inline: { type: Boolean, default: true },
    showLabel: { type: Boolean, default: true },
    type: { type: String, default: "date" },
    inputClass: { type: String, default: "form-control form-control-solid" },
    divClass: { type: String, default: "col-sm-9" },
    labelClass: { type: String, default: "col-sm-3 col-form-label" },
    mainClass: { type: String, default: "form-group row my-4" },
    placeholder: { type: String, required: false },
    format: { type: String, default: "HH:mm" },
    defaulValue: { type: String },
    disabledHours: {
      type: Function,
      default: () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 19, 20, 21, 22, 23, 24];
      },
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event);
    },
  },
};
</script>

<template>
  <div :class="mainClass">
    <label
      v-if="showLabel"
      :class="inline ? labelClass : 'fs-6 fw-bold form-label mb-3'"
      :for="name"
      >{{ label }}</label
    >
    <Field v-model="data" :label="label" :name="name" :rules="rules">
      <div v-if="inline" :class="divClass">
        <el-time-picker
          v-model="data"
          :type="type"
          :format="format"
          :value-format="format"
          :default-value="defaulValue"
          :placeholder="placeholder"
          @change="updateInput"
          :disabled-hours="disabledHours"
          style="border: none; width: 100%"
        >
        </el-time-picker>
        <div class="fv-plugins-message-container mt-4">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
      <div v-else>
        <el-time-picker
          v-model="data"
          :type="type"
          format="HH:mm"
          value-format="HH:mm"
          :default-value="defaulValue"
          :placeholder="placeholder"
          @change="updateInput"
          :disabled-hours="disabledHours"
          style="border: none; width: 100%"
        >
        </el-time-picker>
        <div class="fv-plugins-message-container mt-3">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
    </Field>
  </div>
</template>
