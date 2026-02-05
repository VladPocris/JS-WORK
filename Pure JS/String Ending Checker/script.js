function confirmEnding(strFull, strPhrase) {
  return strFull.slice(-strPhrase.length) === strPhrase;
}