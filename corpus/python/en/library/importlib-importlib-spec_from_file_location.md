---
id: "python-en-function-importlib-spec_from_file_location"
language: "python"
lang: "en"
category: "function"
name: "spec_from_file_location"
signature: "spec_from_file_location(name, location, *, loader=None, submodule_search_locations=None)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.spec_from_file_location"
license: "PSF"
updated: "2026-10-01"
---

# spec_from_file_location

A factory function for creating a `~importlib.machinery.ModuleSpec`
instance based on the path to a file.  Missing information will be filled in
on the spec by making use of loader APIs and by the implication that the
module will be file-based.

> *Added in 3.4*

> *Changed in 3.6*: Accepts a :term:`path-like object`.
