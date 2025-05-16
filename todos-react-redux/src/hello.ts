export function hello(name: string) {
  return `Hello ${name}`;
}

export function addToArray<T>(arr: T[], item: T): T[] {
  return [...arr, item];
}