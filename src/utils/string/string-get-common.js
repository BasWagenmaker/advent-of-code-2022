import { arrayFilterUnique } from "../array/array-filter-unique.js";

export const stringGetCommon = (arrayOfStrings) => {
  let characters = arrayFilterUnique(arrayOfStrings[0].split(""));
  for (let i = 1; i < arrayOfStrings.length; i++) {
    let newCharacters = arrayOfStrings[i].split("");
    characters = characters.filter((character) =>
      newCharacters.includes(character)
    );
  }
  return characters;
};
