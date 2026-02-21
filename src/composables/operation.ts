import { ref, type Ref } from "vue";

export enum Operation {
  PLUS = "plus",
  MINUS = "minus",
  TIMES = "times",
  MIN = "min",
  MAX = "max",
  CONCATENTATE = "cat",
}

export const operationColor: { [key in Operation]: string } = {
  [Operation.PLUS]: "#c6d520",
  [Operation.MINUS]: "#21cd97",
  [Operation.TIMES]: "#1299ff",
  [Operation.MIN]: "#e24141",
  [Operation.MAX]: "#ff22ff",
  [Operation.CONCATENTATE]: "#a559e2",
};

/**
 * List of all valid operations
 */
export const operations = Object.values(Operation);

/**
 * Initialize a ref with a random operation type
 * @returns
 */
export const useOperation = (): Ref<Operation> => {
  const index = Math.floor(Math.random() * (operations.length - 1));
  const operation = operations[index] as Operation;
  return ref(operation);
};
