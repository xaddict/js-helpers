import { ref, onBeforeUnmount } from 'vue';

export function useAbortController() {
  const controller = ref(new AbortController());

  onBeforeUnmount(() => {
    controller.value.abort();
  });

  return controller.value.signal;
}
