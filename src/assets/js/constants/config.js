// import useragnt from '../util/useragnt';

/**
 * サイト設定に係る値を保持する
 */
// export const UA = useragnt;
export const DEBUG_MODE = true; // GUIを表示する
export const IS_DEFAULT_GUI_OPEN = false; // GUIを表示する際デフォルトで開いた状態にする
export const URL_HOME = '/';
export const BASE_PC_WIDTH = 1400;
export const BASE_PC_HEIGHT = 800;
export const BASE_SP_WIDTH = 375;
export const BASE_SP_HEIGHT = 800;
export const BREAKPOINT = 768;
export const MQ_MAX = `(max-width: ${BREAKPOINT}px)`;
export const EASE_LIST = [
  // gsapのeasingリスト
  'linear',
  'sine.in',
  'sine.out',
  'sine.inOut',
  'power1.in',
  'power1.out',
  'power1.inOut',
  'power2.in',
  'power2.out',
  'power2.inOut',
  'power3.in',
  'power3.out',
  'power3.inOut',
  'power4.in',
  'power4.out',
  'power4.inOut',
  'expo.in',
  'expo.out',
  'expo.inOut',
  'back.in',
  'back.out',
  'back.inOut',
  'bounce.in',
  'bounce.out',
  'bounce.inOut',
  'elastic.in',
  'elastic.out',
  'elastic.inOut'
];
