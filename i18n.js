module.exports = {
  locales: ["en", "ca", "es"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    // "/": ["home", "example"],
    // "/about": ["about"],
  },
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
};
