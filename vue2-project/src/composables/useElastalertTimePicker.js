import { ref } from 'vue';

export function useElastalertTimePicker(props, emit) {
  const currentUnit = ref(props.unit);
  const currentAmount = ref(props.amount);

  const emitNumKeyup = () => {
    console.log('emitNumKeyup', currentAmount.value);
    emit('num-keyup', currentAmount.value);
  };

  const emitValue = () => {
    console.log('emitValue', currentAmount.value, currentUnit.value);
    emit('update:value', {
      amount: currentAmount.value,
      unit: currentUnit.value,
    });
  };

  const plural = () => {
    console.log('plural', currentAmount.value);
    return currentAmount.value !== 1 ? 's' : '';
  };

  return {
    currentUnit,
    currentAmount,
    emitNumKeyup,
    emitValue,
    plural,
  };
}
