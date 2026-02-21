<template>
  <fieldset>
    <legend>{{ props.title }}</legend>
    <table>
      <tbody>
        <tr v-for="(entry, index) in props.entries" :key="index">
          <td class="text-right">
            <button @click="entry.selected = !entry.selected">
              {{ entry.selected ? "yes" : "no" }}&nbsp;
            </button>
          </td>
          <td>stack entry {{ entry.value }}</td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>
<script setup lang="ts">
import type { StackEntry } from "@/composables/stack";

const props = defineProps<{ entries: StackEntry[]; title: string }>();
</script>
