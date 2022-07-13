<script setup>
import { ref, defineEmits } from "vue";
import { Field, ErrorMessage } from "vee-validate";
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, default: "" },
  rules: { type: String, default: "" },
  inline: { type: Boolean, default: true },
  showLabel: { type: Boolean, default: true },
  inputClass: { type: String, default: "form-control" },
  divClass: { type: String, default: "col-sm-9" },
  labelClass: { type: String, default: "col-sm-3 col-form-label" },
  mainClass: { type: String, default: "form-group row my-4" },
  placeholder: { type: String, required: false },
  errorMessage: { type: Array, required: false },
  multiple: { type: Boolean, default: false },
});

const data = ref(null);
const emit = defineEmits(["handleUpdate"]);

const updateInput = (value) => {
  const file = props.multiple ? value.value : value.value[0];
  emit("handleUpdate", file);
};
</script>

<template>
  <Field
    :label="label"
    :name="name"
    as="div"
    :class="mainClass"
    :rules="rules"
    v-slot="{ handleChange, handleBlur, field }"
  >
    <label v-if="showLabel" :class="labelClass" :for="name">{{ label }}</label>
    <div v-if="inline" :class="divClass">
      <input
        :class="inputClass"
        type="file"
        :multiple="multiple ? 'true' : 'false'"
        :id="name"
        ref="myFiles"
        :placeholder="placeholder"
        @change="handleChange, updateInput(field)"
        @blur="handleBlur"
      />
      <div class="fv-plugins-message-container mt-2">
        <div class="fv-help-block">
          <ErrorMessage :name="name" />
        </div>
      </div>
    </div>
    <div v-if="!inline">
      <input
        :class="inputClass"
        type="file"
        :multiple="multiple ? 'true' : 'false'"
        :id="name"
        ref="myFiles"
        :placeholder="placeholder"
        @change="handleChange, updateInput(field)"
        @blur="handleBlur"
      />
      <div class="fv-plugins-message-container mt-2">
        <div class="fv-help-block">
          <ErrorMessage :name="name" />
        </div>
      </div>
    </div>
  </Field>
</template>
