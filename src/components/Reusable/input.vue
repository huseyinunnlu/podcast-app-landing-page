<script setup>
import { ref, watch, defineProps, computed } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { mask } from "maska";
const props = defineProps({
  modelValue: { type: [String, Number], default: null },
  name: { type: String, required: true },
  label: { type: String, default: "" },
  rules: { type: String, default: "" },
  inline: { type: Boolean, default: true },
  showLabel: { type: Boolean, default: true },
  inputType: { type: String, default: "text" },
  inputClass: { type: String, default: "form-control form-control-solid" },
  divClass: { type: String, default: "col-sm-9" },
  labelClass: { type: String, default: "col-sm-3 col-form-label" },
  mainClass: { type: String, default: "form-group row my-4" },
  placeholder: { type: String, required: false },
  isMask: { type: Boolean, default: false },
  mask: { type: String },
});
const data = ref(props.modelValue);

const value = computed(() => {
  return props.modelValue;
});

watch(value, (value) => {
  data.value = props.isMask && value.length > 0 ? mask(value, mask) : value;
});

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit(
    "update:modelValue",
    props.isMask ? event.target.dataset.maskRawValue : event.target.value
  );
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
      v-slot="{ value, field }"
    >
      <div v-if="inline" :class="divClass">
        <textarea
          v-if="inputType == 'textarea'"
          :class="inputClass"
          :type="inputType"
          :id="name"
          v-bind="field"
          :value="value"
          :placeholder="placeholder"
          @input="updateInput"
        >
        </textarea>
        <input
          v-else
          :class="inputClass"
          :type="inputType"
          :id="name"
          v-bind="field"
          :value="value"
          :placeholder="placeholder"
          @input="updateInput"
          v-maska="isMask ? mask : ''"
        />
        <div class="fv-plugins-message-container mt-2">
          <div class="fv-help-block">
            <ErrorMessage :name="name" />
          </div>
        </div>
      </div>
      <div v-else>
        <textarea
          v-if="inputType == 'textarea'"
          :class="inputClass"
          :type="inputType"
          :id="name"
          v-bind="field"
          :value="value"
          :placeholder="placeholder"
          @input="updateInput"
        >
        </textarea>
        <input
          v-else
          :class="inputClass"
          :type="inputType"
          v-bind="field"
          :id="name"
          :value="value"
          :placeholder="placeholder"
          @input="updateInput"
          v-maska="isMask ? mask : ''"
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
