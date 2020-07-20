export const getPalette = verdict => {
  const palette = {
    Reliable: "rgb(62, 172, 168)",
    Unreliable: "rgb(172, 0, 15)",
    Undecided: "rgb(115,115,115)",
    null: "rgb(115,115,115)",
  };
  return palette[verdict];
};
export const getBGPalette = verdict => {
  const palette = {
    Reliable: "rgba(62, 172, 168, 0.1)",
    Unreliable: "rgba(176, 38, 0, 0.1)",
    Undecided: "rgb(115,115,115, 0.1)",
    null: "rgb(115,115,115, 0.1)",
  };
  return palette[verdict];
};

export const trimObjFields = obj => {
  const newObj = { ...obj };
  for (let key in newObj) {
    if (typeof newObj[key] === "string") {
      newObj[key] = newObj[key].trim();
    }
  }
  return newObj;
};
