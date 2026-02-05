function truncateString(str, num) {
  const append = "...";

  if (str.length > num) {
    str = str.slice(0, num);
    return str + append;
  } else {
    return str;
  }
}