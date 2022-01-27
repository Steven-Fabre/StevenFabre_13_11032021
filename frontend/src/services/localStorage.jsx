export const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("localUser", serialisedState);
  } catch (e) {
    alert(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("localUser");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    alert(e);
    return undefined;
  }
};
