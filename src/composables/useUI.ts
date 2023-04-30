import { computed } from 'vue';
import { useStore } from 'src/store';

export const useUI = () => {
  const store = useStore();

  return {
    sideMenuOpen: computed<boolean>({
      get: () => store.getters['ui/isSideMenuOpen'],
      set: (value) => store.commit('ui/toggleSideMenu', value),
    }),
    toggleSideMenu: () => store.commit('ui/toggleSideMenu'),
  };
};
