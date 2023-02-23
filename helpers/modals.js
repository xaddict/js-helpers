import { config, popModal, pushModal } from 'jenesius-vue-modal';

config({
  scrollLock: true,
  animation: 'modal-list',
  backgroundClose: true,
  escClose: true,
});

export async function showModal(
  component = null,
  props = {},
  { backgroundClose = false, escClose = false } = {}
) {
  const close = () => popModal();
  const modal = await pushModal(component, { onClose: close, ...props });
  console.debug(`Open modal ${modal.id}`);
  modal.onclose = (event) => {
    let canClose = true;
    if (event.esc) {
      canClose = escClose;
    }
    if (event.background) {
      canClose = backgroundClose;
    }
    console.debug(`trying to close modal ${modal.id}`, { canClose });
    return canClose;
  };
  return modal;
}
