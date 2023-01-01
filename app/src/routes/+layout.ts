import { browser } from '$app/environment'

export const ssr = false;

browser && window.Neutralino.init();