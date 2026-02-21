import { computed, ref } from "vue";
import { Operation, useOperation } from "./operation";

/**
 * An entry in the stack
 */
export interface StackEntry {
  value: number;
  selected: boolean;
}

export const useStack = () => {
  /**
   * List of values in the stack
   */
  const values = ref<StackEntry[]>([]);

  /**
   * List of selected values in the stack
   */
  const selected = computed(() => values.value.filter((v) => v.selected).map((v) => v.value));

  /**
   * Current stack operation
   */
  const operation = useOperation();

  /**
   * Add a new value to the stack
   * @param value the value
   */
  const addValue = (value: number) => {
    values.value.push({ value, selected: false });
  };

  /**
   * Calculate and return the result of the operation on the stack
   * @returns the result
   */
  const calculate = (): number => {
    if (operation.value == Operation.PLUS) {
      return selected.value.reduce((p, c) => p + c, 0);
    } else if (operation.value == Operation.MINUS) {
      return selected.value.reduce((p, c) => p - c, 0);
    } else if (operation.value == Operation.CONCATENTATE) {
      return Number(selected.value.join());
    } else if (operation.value == Operation.MAX) {
      return selected.value.reduce((p, c) => (c > p ? c : p), Number.MIN_VALUE);
    } else if (operation.value == Operation.MIN) {
      return selected.value.reduce((p, c) => (c < p ? c : p), Number.MAX_VALUE);
    } else if (operation.value == Operation.TIMES) {
      return selected.value.reduce((p, c) => p * c, 0);
    } else {
      throw new Error(`unknown operation ${operation.value}`);
    }
  };

  return { values, operation, selected, addValue, calculate };
};
