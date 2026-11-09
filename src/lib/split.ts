/**
 * Делит текст элемента на слова (и, при желании, символы) для анимаций.
 * Исходный текст остаётся в aria-label, а куски скрыты от скринридеров.
 */
export function splitText(el: HTMLElement, mode: 'words' | 'chars' = 'words') {
  if (el.dataset.split) return collect(el, mode);
  const text = el.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  el.setAttribute('aria-label', text);
  el.dataset.split = mode;

  const frag = document.createDocumentFragment();
  text.split(' ').forEach((word, i, arr) => {
    const mask = document.createElement('span');
    mask.className = 'split-mask';
    mask.setAttribute('aria-hidden', 'true');

    const w = document.createElement('span');
    w.className = 'split-word';
    if (mode === 'chars') {
      for (const ch of word) {
        const c = document.createElement('span');
        c.className = 'split-char';
        c.textContent = ch;
        w.append(c);
      }
    } else {
      w.textContent = word;
    }
    mask.append(w);
    frag.append(mask);
    if (i < arr.length - 1) frag.append(' ');
  });

  el.replaceChildren(frag);
  return collect(el, mode);
}

function collect(el: HTMLElement, mode: 'words' | 'chars') {
  return Array.from(el.querySelectorAll<HTMLElement>(mode === 'chars' ? '.split-char' : '.split-word'));
}
