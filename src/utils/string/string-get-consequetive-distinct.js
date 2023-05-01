export const stringGetConsequetiveDistinct = (string, characters) => {
  const unique = [];
  for (let i = 0; unique.length < characters; i++) {
    if (unique.includes(string[i])) {
      unique.splice(0, unique.indexOf(string[i]) + 1);
    }
    unique.push(string[i]);
    if (unique.length === characters) return i + 1;
  }
};
