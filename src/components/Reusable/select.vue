<style src="@vueform/multiselect/themes/default.css"></style>
<script setup>
import { Field, ErrorMessage } from "vee-validate";
import Multiselect from "@vueform/multiselect";
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";

const props = defineProps({
  modelValue: { type: [String, Number] },
  name: { type: String, required: true },
  label: { type: String, default: "" },
  rules: { type: String, default: "" },
  inline: { type: Boolean, default: true },
  showLabel: { type: Boolean, default: true },
  divClass: { type: String, default: "col-sm-9" },
  labelClass: { type: String, default: "col-sm-3 col-form-label" },
  mainClass: { type: String, default: "form-group row my-4" },
  placeholder: { type: String, required: false },
  errorMessage: { type: Array, required: false },
  //select props
  options: { type: Array, required: true },
  model: { type: String, default: "single" },
  searchable: { type: Boolean, default: true },
  trackBy: { type: String, default: "title" },
  disabled: { type: Boolean, default: false },
  selectLabel: { type: String, default: "title" },
  valueProp: { type: String, default: "id" },
});

const data = ref(props.modelValue);

const value = computed(() => {
  return props.modelValue;
});

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit("update:modelValue", event);
};
watch(value, (value) => {
  data.value = value;
});
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
      v-slot="{ value, field }"
    >
      <div v-if="inline" :class="divClass">
        <Multiselect
          v-model="data"
          v-bind="field"
          :value="value"
          :id="name"
          :valueProp="valueProp"
          :placeholder="placeholder"
          @change="updateInput"
          :options="options"
          :label="selectLabel"
          :model="model"
          :searchable="searchable"
          :trackBy="trackBy"
          :disabled="disabled"
        />
        <div class="fv-plugins-message-container mt-2">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
      <div v-if="!inline">
        <Multiselect
          v-model="data"
          v-bind="field"
          :value="value"
          @change="updateInput"
          :valueProp="valueProp"
          :label="selectLabel"
          :id="name"
          :placeholder="placeholder"
          :options="options"
          :model="model"
          :searchable="searchable"
          :trackBy="trackBy"
          :disabled="disabled"
        />
        <div class="fv-plugins-message-container mt-2">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
    </Field>
  </div>
</template>
