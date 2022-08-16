if (typeof document == "undefined") {
  throw new Error("This script is meant to be run in an HTML page.")
}

const elements = document.querySelectorAll("*")

function keyword(regex, e) {
  if (element.className.match(regex)) {
    e()
  }
}

for (element of elements) {
  keyword(/size:([0-9]*\.?[0-9]*?[icmp%ve][mxtnhw]?)/i,
    () => {element.style["font-size"] = RegExp.lastParen;})
  keyword(/h:([0-9]*\.?[0-9]*?[icmp%ve][mxtnhw]?)/i,
    () => {element.style["height"] = RegExp.lastParen;})
  if (element.className.match(/w:([0-9]*\.?[0-9]*?[icmp%ve][mxtnhw]?)/i)) {
    element.style["width"] = RegExp.lastParen;
  }
  if (element.className.match(/bgurl:([A-Za-z0-9\.\/\\\?=\+%@&]+)/i)) {
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
  keyword(/show:(b|i|ib|f|if|g|ig|r|no|in)/, // block, inline, inline block, flex, inline flex, grid, inline grid, flex root, none, inherit
  () => {element.style["display"] = {b: 'block',i:'inline',ib:'inline-block',f:'flex',if:'inline-flex',g:'grid',ig:'inline-grid',r:'flex-root',no:'none','in':'inherit'}[RegExp.lastParen]})
}