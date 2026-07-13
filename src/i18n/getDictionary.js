import { defaultLocale } from "./config";

const dictionaries = {
    en: () => import("./dictionaries/en.json").then((m) => m.default),
    tr: () => import("./dictionaries/tr.json").then((m) => m.default),
    es: () => import("./dictionaries/es.json").then((m) => m.default),
    pt: () => import("./dictionaries/pt.json").then((m) => m.default),
    fr: () => import("./dictionaries/fr.json").then((m) => m.default),
    de: () => import("./dictionaries/de.json").then((m) => m.default),
    ru: () => import("./dictionaries/ru.json").then((m) => m.default)
};

export async function getDictionary(locale) {
    const load = dictionaries[locale] || dictionaries[defaultLocale];
    return load();
}
