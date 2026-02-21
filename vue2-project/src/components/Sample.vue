<script setup>
import { useCounter } from './useCounter.js';
const { count, increment, decrement } = useCounter();
</script>

<template>
  <div>
    <p data-cy="counter">Times clicked: {{ count }}</p>
    <button @click="increment" data-cy="increment">increment</button>
    <button @click="decrement" data-cy="decrement">decrement</button>
  </div>
</template>
