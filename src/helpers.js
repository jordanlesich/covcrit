export const getPalette = verdict => {
  const palette = {
    primary: "rgb(33, 134, 196)",
    secondary: "rgb(23, 20, 60)",
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
    primary: "rgb(33, 134, 196, 0.2)",
    highlightprimary: "rgb(33, 134, 196, 0.1)",
    secondary: "rgba(23, 20, 60, 0.2)",
    reliable: "rgba(62, 172, 168, 0.2)",
    unreliable: "rgba(176, 38, 0, 0.2)",
    undecided: "rgb(115,115,115, 0.2)",
    null: "rgb(115,115,115, 0.2)",
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
