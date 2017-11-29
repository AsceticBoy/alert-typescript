import { jsdom } from 'jsdom';

declare var global: any;
declare var document: any;

if (typeof window !== 'undefined') {
  const documentHTML =
    '<!doctype html><html><body><div id="root"></div></body></html>';
  global.document = jsdom(documentHTML);
  global.window = document.parentWindow;

  global.window.resizeTo = (width: number, height: number) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };
}

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function(cb: any) {
    return setTimeout(cb, 0);
  };
