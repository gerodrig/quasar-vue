export interface UIStateInterface {
  isSideMenuOpen: boolean;
}

function state(): UIStateInterface {
  return {
    isSideMenuOpen: true,
  };
}

export default state;
