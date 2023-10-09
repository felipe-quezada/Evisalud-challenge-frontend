import { ref } from 'vue'

export const useBoolean = () => {
  const booleanState = ref(false)
  return {
    booleanState,
    setBooleanState() {
      return (booleanState.value = !booleanState.value)
    }
  }
}
