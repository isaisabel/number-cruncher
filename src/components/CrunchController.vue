<template>
  <fieldset>
    <legend>Crunch Controller</legend>
    <div class="divide-y-4">
      <div class="flex items-center gap-2 justify-end mb-4 pb-4">
        <div>Staged: {{ stagedValue }}</div>
        <OperationDisplay :operation="numberCruncher.stackL.operation" title="L" />
        <OperationDisplay :operation="numberCruncher.stackR.operation" title="R" />
        <OperationDisplay :operation="numberCruncher.operation" title="F" />
      </div>
      <div class="flex gap-4 items-center">
        <div class="grid shrink-0 grid-rows-2 grid-cols-2 gap-1 *:border *:rounded *:px-2 *:py-1">
          <button @click="stagedValue++">More</button>
          <button @click="stagedValue--" :disabled="stagedValue == 0">Less</button>
          <button @click="numberCruncher.stackL.addValue(stagedValue)">></button>
          <button @click="numberCruncher.stackR.addValue(stagedValue)">>></button>
        </div>
        <div class="shrink">
          <OperationSlider title="L" v-model:operation="numberCruncher.stackL.operation" />
          <OperationSlider title="R" v-model:operation="numberCruncher.stackR.operation" />
          <OperationSlider title="F" v-model:operation="numberCruncher.operation" />
        </div>
      </div>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import { useNumberCruncher } from "@/stores/numberCruncher.store";
import { ref } from "vue";
import OperationDisplay from "./OperationDisplay.vue";
import OperationSlider from "./OperationSlider.vue";
const stagedValue = ref(0);

const numberCruncher = useNumberCruncher();
</script>
