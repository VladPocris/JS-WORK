function addTogether(a, b) {
  if (typeof a !== "number") return undefined;

  if (arguments.length === 1) {
    return function (c) {
      if (typeof c !== "number") return undefined;
      return a + c;
    };
  }

  if (typeof b !== "number") return undefined;

  return a + b;
}