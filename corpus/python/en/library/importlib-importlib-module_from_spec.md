---
id: "python-en-function-importlib-module_from_spec"
language: "python"
lang: "en"
category: "function"
name: "module_from_spec"
signature: "module_from_spec(spec)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.module_from_spec"
license: "PSF"
updated: "2026-10-01"
---

# module_from_spec

Create a new module based on **spec** and
`spec.loader.create_module`.

If `spec.loader.create_module`
does not return `None`, then any pre-existing attributes will not be reset.
Also, no `AttributeError` will be raised if triggered while accessing
**spec** or setting an attribute on the module.

This function is preferred over using `types.ModuleType` to create a
new module as **spec** is used to set as many import-controlled attributes on
the module as possible.

> *Added in 3.5*
