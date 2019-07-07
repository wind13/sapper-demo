import { writable, derived } from 'svelte/store';
import i18nCommon from "./langs/common.js";
import { mergeDeepRight } from "ramda";

export const defaultLang = 'zh-CN';
export const lang = writable(defaultLang);
export const messages = writable(i18nCommon);
export const i18n = derived([lang, messages], ([$lang, $messages]) => {
  return (key) => $messages[$lang][key]
});

export const updateMessages = (i18nJSON) => {
  messages.update(v => mergeDeepRight(v, i18nJSON))
}

export const updateLang = (lng) => {
  lang.update(v => lng)
}

export const langs = ['en-US', 'zh-CN'];