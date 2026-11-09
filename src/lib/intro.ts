/** Общий сигнал «прелоадер закончился — можно запускать появление hero». */
let release!: () => void;
export const introDone = new Promise<void>((r) => (release = r));
export function releaseIntro() {
  release();
}
