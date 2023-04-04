import GUI from 'lil-gui';
import { DEBUG_MODE, IS_DEFAULT_GUI_OPEN, EASE_LIST } from './config';

/**
 * lil-guiを使ってパラメータ調整できる値を管理する
 */
class Param {
  VALUE = {
    number: { value: 10, min: 0, max: 100, hasStep: 1 },
    color: { value: '#FFFFFF' },
    list: { value: 'power2.inOut', list: EASE_LIST },
    button: {
      value: () => {
        return;
      }
    }
  };

  constructor() {
    if (!DEBUG_MODE) return;
    this._init();
  }

  _init() {
    this.gui = new GUI();
    // ↓ここにフォルダ分けしたい値を記述する
    this._addGUI(this.VALUE, 'Value');
    // document.querySelector('.dg').style.zIndex = 9999;
    this.gui.open(IS_DEFAULT_GUI_OPEN);
  }

  _addGUI(param, folderName) {
    const folder = this.gui.addFolder(folderName);
    for (let key in param) {
      let val = param[key];
      let g;
      if (/color/.test(key.toLocaleLowerCase())) {
        g = folder.addColor(val, 'value').name(key);
      } else {
        if (val.list) {
          g = folder.add(val, 'value', val.list).name(key);
        } else {
          g = folder.add(val, 'value', val.min, val.max).name(key);
        }
      }
      val.gui = g;
    }
  }
}

export const PARAM = new Param();
export const VALUE = PARAM.VALUE;
