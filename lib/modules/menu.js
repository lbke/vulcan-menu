import values from "lodash/values";
import Users from "meteor/vulcan:users";
const defaultMenuName = "defaultMenu";
const registeredMenus = {
  [defaultMenuName]: {}
};

export const registerMenuItem = (
  itemId,
  config,
  menuName = defaultMenuName
) => {
  if (!registeredMenus[menuName]) {
    registeredMenus[menuName] = {};
  }
  registeredMenus[menuName][itemId] = { id: itemId, ...config };
};

export const removeMenuItem = (itemId, menuName = defaultMenuName) => {
  delete registeredMenus[menuName][itemId];
  if (
    menuName !== defaultMenuName &&
    Objet.isEmpty(registeredMenus[menuName])
  ) {
    delete registeredMenus[menuName];
  }
};

// should not be needed
export const getMenuItemsConfig = (menuName = defaultMenuName) =>
  registeredMenus[menuName];
export const getAllMenuItemsConfig = () => registeredMenus;

const filterAuthorized = (currentUser, menuItems) =>
  menuItems.filter(({ groups }) => {
    // items without groups are visible by guests too
    if (!groups) return true;
    return Users.isMemberOf(currentUser, groups);
  });
// filter with authorization automatically
export const getAuthorizedMenuItems = (currentUser, ...args) =>
  filterAuthorized(currentUser, getMenuItems(...args));

export const getMenuItems = (menuName = defaultMenuName) => {
  const menu = registeredMenus[menuName];
  if (!menu) {
    console.warn(
      `Warning: Menu ${menuName} unknown. Menus available: ${Object.keys(
        registeredMenus
      )}`
    );
    return [];
  }
  return values(menu);
};

// { admin: [menuItem1, menuItem2, ...], defaultMenu: [...]}
export const getMenuItemsMap = () =>
  Object.keys(registeredMenus).reduce((res, menuName) => ({
    ...res,
    [menuName]: getMenuItems(menuName)
  }));
