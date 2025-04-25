export const showText = (html_class: string, text: string) => {
  const targets = document.getElementsByClassName(html_class);
  if (targets.length === 0) return;

  const target = targets[0] as HTMLElement;
  const delay = 100;
  const pause = 1500;
  let index = 0;

  const typeLoop = () => {
    if (index <= text.length) {
      target.textContent = text.substring(0, index);
      index++;
      setTimeout(typeLoop, delay);
    } else {
      setTimeout(() => {
        index = 0;
        typeLoop();
      }, pause);
    }
  };

  typeLoop();
};
export const isMobileScreen = () => {
  return window.innerWidth <= 768;
};
