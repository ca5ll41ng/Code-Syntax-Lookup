---
id: "python-en-function-importlib-metadata-entrypoint"
language: "python"
lang: "en"
category: "function"
name: "EntryPoint"
directive: "class"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.EntryPoint"
license: "PSF"
updated: "2026-10-01"
---

# EntryPoint

Details of an installed entry point.

Each `EntryPoint` instance has `.name`, `.group`, and `.value`
attributes and a `.load()` method to resolve the value. There are also
`.module`, `.attr`, and `.extras` attributes for getting the
components of the `.value` attribute, and `.dist` for obtaining
information regarding the distribution package that provides the entry point.
