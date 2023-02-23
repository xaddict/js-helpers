export function percentToPx(percent, ctx) {
  return Math.floor((ctx.canvas.width / 100) * percent);
}
