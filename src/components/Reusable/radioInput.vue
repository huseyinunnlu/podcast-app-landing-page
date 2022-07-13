<script>
import { Field, ErrorMessage } from 'vee-validate'
export default {
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      data: this.modelValue,
    }
  },
  props: {
    modelValue: { type: String, default: '' },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    rules: { type: String, default: '' },
    showLabel: { type: Boolean, default: true },
    inputClass: { type: String, default: 'form-control-select' },
    labelClass: { type: String, default: 'col-form-label' },
    mainClass: { type: String, default: 'form-group my-4' },
    options: { type: Object || Array, required: true },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },

  watch: {
    modelValue(value) {
      this.data = value
    },
  },
}
</script>

<template>
  <div :class="mainClass">
    <label v-if="showLabel" :class="labelClass" :for="name">{{ label }}</label>
    <Field
      v-model="data"
      v-slot="{ field }"
      :name="name"
      :label="label"
      type="radio"
      :value="name"
      :rules="rules"
    >
      <div class="form-group">
        <label
          :for="item.id"
          v-for="(item, index) in options"
          :key="index"
          class="me-2"
        >
          <input
            type="radio"
            :id="item.id"
            :class="inputClass"
            :value="item.id"
            v-bind="field"
            @input="updateInput"
            v-model="data"
            :checked="data == item.id"
          />
          {{ item.title }}
        </label>
      </div>
      <small class="text-danger">
        <ErrorMessage :name="name" />
      </small>
    </Field>
  </div>
</template>
