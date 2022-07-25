export function updateLocalStorage(storageKey: string, storageName: string): void {
  localStorage.setItem(storageKey, storageName);
}
