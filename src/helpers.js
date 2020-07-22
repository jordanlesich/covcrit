export const getPalette = verdict => {
  const palette = {
    reliable: "rgb(62, 172, 168)",
    unreliable: "rgb(172, 0, 15)",
    undecided: "rgb(115,115,115)",
    null: "rgb(115,115,115)",
    both: "rgb(115, 115, 155)",
  };
  return palette[verdict.toLowerCase()];
};
export const getBGPalette = verdict => {
  const palette = {
    reliable: "rgba(62, 172, 168, 0.3)",
    unreliable: "rgba(176, 38, 0, 0.3)",
    undecided: "rgb(115,115,115, 0.3)",
    null: "rgb(115,115,115, 0.3)",
    both: "rgb(115, 115, 155)",
  };
  return palette[verdict.toLowerCase()];
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
