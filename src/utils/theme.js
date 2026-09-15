import { useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const listeners = new Set();

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStored(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
    return true;
  } catch {
    return false;
  }
}

function apply(theme) {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((listener) => listener());
}

function onSystemChange(e) {
  if (!readStored()) apply(e.matches ? "dark" : "light");
}

function subscribe(listener) {
  if (listeners.size === 0) darkQuery().addEventListener("change", onSystemChange);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) darkQuery().removeEventListener("change", onSystemChange);
  };
}

export function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function setTheme(theme) {
  writeStored(theme);
  apply(theme);
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, () => "light");
}
