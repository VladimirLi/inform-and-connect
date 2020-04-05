function getNames(item, language) {
  if (typeof item.name === "string") {
    return capitalizeFLetter(item.name);
  } else {
    const lc = language.code;
    const name = lc in item.name ? item.name[lc] : item.name["en"];
    return name;
  }
}
function capitalizeFLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function UIElementIfExists(UIElement, languageCode) {
  if (languageCode in UIElement) return UIElement[languageCode];
  return UIElement["en"];
}

export { getNames, capitalizeFLetter, UIElementIfExists };
