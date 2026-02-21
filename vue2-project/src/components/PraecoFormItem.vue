<template>
  <el-form-item
    v-show="
      !(value && hidePreconfiguredFields.includes(prop)) || type === 'template'
    "
    :label="label"
    :prop="prop"
    :required="required"
    :label-width="labelWidth"
    :rules="rules"
    :error="error"
    :show-message="showMessage"
    :inline-message="inlineMessage"
    :size="size"
  >
    <slot />
  </el-form-item>
</template>

<script setup>
import { usePraecoFormItem } from '../composables/usePraecoFormItem';

const props = defineProps([
  'label',
  'prop',
  'rules',
  'error',
  'showMessage',
  'inlineMessage',
  'size',
]);

const { hidePreconfiguredFields, type } = usePraecoFormItem();
</script>
