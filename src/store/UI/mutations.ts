import { MutationTree } from 'vuex';
import { UIStateInterface } from './state';

const mutation: MutationTree<UIStateInterface> = {
  toggleSideMenu(state: UIStateInterface) {
    // your code
    state.isSideMenuOpen = !state.isSideMenuOpen;
  },
};

export default mutation;
