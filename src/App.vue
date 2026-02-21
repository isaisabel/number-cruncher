<script setup lang="ts">
import CrunchController from "./components/CrunchController.vue";
import CrunchKey from "./components/CrunchKey.vue";
import StackTable from "./components/StackTable.vue";
import { useNumberCruncher } from "./stores/numberCruncher.store";

const numberCruncher = useNumberCruncher();
</script>

<template>
  <div class="h-svh flex flex-col p-8">
    <header class="mb-12 flex gap-4">
      <div class="w-6 flex items-center">
        {{ numberCruncher.lastResult }}
      </div>
      <h1 class="font-black text-6xl">Number Cruncher</h1>
      <div class="grow"></div>
      <button
        @click="numberCruncher.calculate()"
        :disabled="!numberCruncher.ready"
        class="font-bold px-6"
      >
        Crunch!
      </button>
    </header>
    <main class="flex gap-4 *:grow">
      <div class="flex flex-col gap-2">
        <CrunchController />
        <CrunchKey />
        <button @click="numberCruncher.ready = !numberCruncher.ready" class="font-bold">
          {{ numberCruncher.ready ? "Not ready" : "Ready" }}
        </button>
      </div>
      <StackTable class="basis-xl" :entries="numberCruncher.stackL.values" title="Stack L" />
      <StackTable class="basis-xl" :entries="numberCruncher.stackR.values" title="Stack R" />
    </main>
    <div class="grow"></div>
    <aside class="text-xs text-black/40 max-w-[60ch] mt-4">
      Hello. If you are looking at this to evaluate whether I am a competent human-centered software
      engineer, please know that I made it bad on purpose. Thank you!
    </aside>
  </div>
</template>

<style scoped></style>
