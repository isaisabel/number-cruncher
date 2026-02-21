import { Operation, useOperation } from "@/composables/operation";
import { useStack } from "@/composables/stack";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNumberCruncher = defineStore("numberCruncher", () => {
  const stackL = useStack();
  const stackR = useStack();

  /**
   * Current F (L-R) stack operation
   */
  const operation = useOperation();

  /**
   * Is the number cruncher ready to crunch numbers?
   */
  const ready = ref(false);

  /**
   * Most recent calculation result
   */
  const lastResult = ref<number>();

  /**
   * If ready, calculate a new result and place the output in lastResult
   */
  const calculate = () => {
    let result: number;
    try {
      // check selections
      if (stackL.selected.value.length == 0) {
        throw new Error("no items selected in Stack L");
      }
      if (stackR.selected.value.length == 0) {
        throw new Error("no items selected in Stack R");
      }

      // compute result
      if (operation.value == Operation.PLUS) {
        result = stackL.calculate() + stackR.calculate();
      } else if (operation.value == Operation.MINUS) {
        result = stackL.calculate() - stackR.calculate();
      } else if (operation.value == Operation.CONCATENTATE) {
        result = Number(String(stackL.calculate()) + String(stackR.calculate()));
      } else if (operation.value == Operation.MAX) {
        result = Math.max(stackL.calculate(), stackR.calculate());
      } else if (operation.value == Operation.MIN) {
        result = Math.min(stackL.calculate(), stackR.calculate());
      } else if (operation.value == Operation.TIMES) {
        result = stackL.calculate() * stackR.calculate();
      } else {
        throw new Error(`unknown operation ${operation.value}`);
      }
      // ensure result is a number
      if (typeof result == "number") {
        lastResult.value = result;
      } else {
        throw new Error(`result was not a number: ${result}`);
      }
    } catch (err) {
      // if anything fails, yell at the user about it!
      console.error(err);
      alert("Don't do that!");
    }
  };

  return { stackL, stackR, operation, ready, calculate, lastResult };
});
