if (typeof document == "undefined") {
  throw new Error("This script is meant to be run in an HTML page.")
}

const pEl = document.getElementsByTagName("p")
const elements = document.querySelectorAll("*")

for (element of elements) {
  if (element.target == "_blank") {
    e.target.innerText = "⇱ " + e.target.innerText
  }
  if (element.className.match(/size:([0-9]*\.?[0-9]*?[icmp%ve][mxtnhw]?)/i)) {
    element.style["font-size"] = RegExp.lastParen;
  }
  if (element.className.match(/h:([0-9]*\.?[0-9]*?[icmp%ve][mxtnhw]?)/i)) {
    element.style["height"] = RegExp.lastParen;
  }
  if (element.className.match(/w:([0-9]*\.?[0-9]*?[icmp%ve][mxtnhw]?)/i)) {
    element.style["width"] = RegExp.lastParen;
  }
  if (element.className.match(/bgurl:(.+)/i)) {
    element.style["background-image"] = "url('"+RegExp.lastParen+"')"
  }
  if (element.className.match(/c:([0-9a-zA-Z\(\),]+)/i)) {
    element.style["color"] = RegExp.lastParen;
  }
  if (element.className.match(/bc:([0-9a-zA-Z\(\),]+)/i)) {
    element.style["background-color"] = RegExp.lastParen;
  }
  if (element.className.match(/wrap:(hide|word|all)/i)) {
    element.style["overflow"] = {hide: "hidden", word: "break-word", all: "break-all"}[RegExp.lastParen];
  }
}