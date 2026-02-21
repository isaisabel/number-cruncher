<template>
  <div
    class="border size-12 flex rounded-full items-center justify-center"
    :style="{ background: color }"
  >
    {{ title }}
  </div>
</template>
<script setup lang="ts">
import { operationColor, type Operation } from "@/composables/operation";
import { computed } from "vue";

const props = defineProps<{ operation: Operation; title: string }>();
const color = computed(() => operationColor[props.operation]);
</script>
