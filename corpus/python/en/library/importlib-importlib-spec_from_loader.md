---
id: "python-en-function-importlib-spec_from_loader"
language: "python"
lang: "en"
category: "function"
name: "spec_from_loader"
signature: "spec_from_loader(name, loader, *, origin=None, is_package=None)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.spec_from_loader"
license: "PSF"
updated: "2026-10-01"
---

# spec_from_loader

A factory function for creating a `~importlib.machinery.ModuleSpec`
instance based on a loader.  The parameters have the same meaning as they do
for ModuleSpec.  The function uses available `loader` APIs, such as
`InspectLoader.is_package`, to fill in any missing
information on the spec.

> *Added in 3.4*
