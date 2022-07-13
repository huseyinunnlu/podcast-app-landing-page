<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      data: this.modelValue || 0,
    };
  },
  watch: {
    data(value) {
      this.data = value || 0;
    },
  },
  props: {
    modelValue: {},
    name: { type: String, required: true },
    label: { type: String, default: "" },
    rules: { type: String, default: "" },
    inline: { type: Boolean, default: true },
    showLabel: { type: Boolean, default: true },
    inputClass: { type: String, default: "form-control form-control-solid" },
    divClass: { type: String, default: "col-sm-9" },
    labelClass: { type: String, default: "col-sm-3 col-form-label" },
    mainClass: { type: String, default: "form-group row my-4" },
    placeholder: { type: String, required: false },
    options: {
      default: {
        prefix: "₺",
        decimal: ",",
        thousand: ".",
        precision: 2,
        isInteger: true,
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
    <Field
      v-model="data"
      :label="label"
      :name="name"
      :rules="rules"
      v-slot="{ field, value }"
    >
      <div v-if="inline" :class="divClass">
        <VueNumberFormat
          v-model:value="data"
          :id="name"
          v-bind="
            () => {
              return field.replace(/[^\d.]/g, '');
            }
          "
          :value="value || 0"
          :class="inputClass"
          @change="updateInput(data)"
          :options="options"
        ></VueNumberFormat>
        <div class="fv-plugins-message-container mt-2">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
      <div v-else>
        <VueNumberFormat
          v-model:value="data"
          v-bind="
            () => {
              return field.replace(/[^\d.]/g, '');
            }
          "
          :value="value || 0"
          :id="name"
          :class="inputClass"
          @change="updateInput(data)"
          :options="options"
        ></VueNumberFormat>
        <div class="fv-plugins-message-container mt-2">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
    </Field>
  </div>
</template>
