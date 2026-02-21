<template>
  <div class="flex gap-2">
    <label :for="id" class="w-4">{{ title }}</label>
    <input
      type="range"
      :id="id"
      :name="title"
      min="0"
      :max="operations.length - 1"
      v-model="operationAsIndex"
      class="w-full"
    />
  </div>
</template>
<script setup lang="ts">
import { operations, type Operation } from "@/composables/operation";
import { computed, useId } from "vue";

const id = useId();

defineProps<{ title: string }>();

const operation = defineModel<Operation>("operation");
const operationAsIndex = computed<number>({
  get: () => {
    if (!operation.value) return 0;
    return operations.indexOf(operation.value);
  },
  set: (v: number) => {
    operation.value = operations[v];
  },
});
</script>
