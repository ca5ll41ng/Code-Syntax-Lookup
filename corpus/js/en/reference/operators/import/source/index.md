---
id: "js-en-function-web-javascript-reference-operators-import-source"
language: "js"
lang: "en"
category: "function"
name: "import.source"
title: "import.source()"
directive: "javascript-language-feature"
module: "reference\\operators\\import\\source\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/import/source"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# import.source()

The **`import.source()`** syntax behaves like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) syntax, except that it results in an object that represents the module's compiled source code. The module is fetched and compiled, but its dependencies are not loaded and it is not linked or evaluated. It can be imperatively evaluated later, such as by using [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import) or [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

To use `import.source()`, the target module must be of a kind that supports source phase imports. Currently, only WebAssembly modules support source phase imports, and result in [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects. JavaScript module source objects will be added by the [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) proposal.

For more information about the semantics of source phase imports, see the [`import source`](/en-US/docs/Web/JavaScript/Reference/Statements/import/source) declaration form.

## Syntax

```js-nolint
import.source(moduleName)
import.source(moduleName, options)
```

`import.source()` is special syntax (a "meta property"), not a method on an `import` object.

### Parameters

See [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Return value

Returns a promise that fulfills with an `AbstractModuleSource` object representing the module's compiled source after the module is loaded and compiled successfully.

Like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#return_value), the promise rejects if the module cannot be loaded or parsed. It also rejects with a `SyntaxError` if the module type does not support source phase imports. The import does not load dependencies, link, or evaluate the module, so errors from those later steps are not reported.

## Examples

### Using import.source()

```js
const myModuleSource = await import.source("./my-module.wasm");

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

## Specifications

## Browser compatibility

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide
- `Operators/import`
- `Statements/import/source`
- `AbstractModuleSource`
