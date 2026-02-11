const markdownText = document.getElementById("markdown-input");
const rawHTMLOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");


function convertMarkdown() {
  let str = markdownText.value;
  const regexHeading = /^ {0,3}(#{1,3})\s(.*?)$/gm;
  const regexBold = /(\*\*|__)(.*?)\1/g;
  const regexItalic = /(\*|_)(.*?)\1/g;
  const regexImage = /\!\[(.*?)\]\((.*?)\)/g;
  const regexLink = /\[(.*?)\]\((.*?)\)/g;
  const regexQuote = /^ {0,3}>\s(.+)$/gm;
  const rules = [
  { regex: regexHeading, handler: handleHeading },
  { regex: regexBold, handler: handleBold },
  { regex: regexItalic, handler: handleItalic },
  { regex: regexImage, handler: handleImage },
  { regex: regexLink, handler: handleLink },
  { regex: regexQuote, handler: handleQuote }
  ];


  rules.forEach(({ regex, handler }) => {
    str = str.replace(regex, handler);
  });

  console.log(str);

  return str;
}

function handleHeading(match, hashes, text) {
  const level = hashes.length;
  return `<h${level}>${text}</h${level}>`;
}

function handleBold(match, marker, text) {
  return `<strong>${text}</strong>`;
}

function handleItalic(match, marker, text) {
  return `<em>${text}</em>`;
}

function handleImage(match, alt, source) {
  return `<img alt="${alt}" src="${source}">`;
}

function handleLink(match, text, url) {
  return `<a href="${url}">${text}</a>`
}

function handleQuote(match, text) {
  return `<blockquote>${text}</blockquote>`
}

function uiUpdates(str) {
  rawHTMLOutput.textContent = str;
  htmlPreview.innerHTML = str;
}

markdownText.addEventListener("input", () => {
  const result = convertMarkdown();
  uiUpdates(result);
})