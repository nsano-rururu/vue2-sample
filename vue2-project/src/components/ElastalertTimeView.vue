<template>
  <span>
    {{ value }}
    {{ unit }}
  </span>
</template>

<script setup>
import { useElastalertTimeView } from '../composables/useElastalertTimeView';

const props = defineProps({
  time: {
    type: Object,
    required: true,
  },
});

const { value, unit } = useElastalertTimeView(props);
</script>
