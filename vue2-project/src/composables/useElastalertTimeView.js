import { ref, watch } from 'vue';

export function useElastalertTimeView(props) {
  const value = ref('999');
  const unit = ref('seconds');

  watch(
    () => props.time,
    (newTime) => {
      if (newTime) {
        value.value = newTime.value;
        unit.value = newTime.unit;
      }
    }
  );

  return {
    value,
    unit,
  };
}
