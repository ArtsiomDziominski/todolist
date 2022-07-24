export function getFromLocalStorage(storageKey:string): string | null {
  return localStorage.getItem(storageKey);
}
