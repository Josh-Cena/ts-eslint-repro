export type Foo = string;

type Unexported = number;

// This is actually necessary for the current file to be a module.
// https://github.com/microsoft/TypeScript/issues/38592
export {};
