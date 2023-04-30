import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UIStateInterface } from './state';

const getters: GetterTree<UIStateInterface, StateInterface> = {
  isSideMenuOpen(state) {
    return state.isSideMenuOpen;
  },
};

export default getters;
