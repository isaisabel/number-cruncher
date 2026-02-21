<template>
  <fieldset>
    <legend>Crunch Key</legend>
    <div class="flex items-center flex-wrap gap-1">
      <template v-for="(operation, index) in operations" :key="index">
        <span>{{ operation }}</span>
        <span
          class="border size-4 inline-block"
          :style="{ background: operationColor[operation] }"
        ></span>
      </template>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import { operationColor, operations } from "@/composables/operation";
</script>
