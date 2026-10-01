---
id: "python-en-function-importlib-metadata-simplepath"
language: "python"
lang: "en"
category: "function"
name: "SimplePath"
directive: "class"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.SimplePath"
license: "PSF"
updated: "2026-10-01"
---

# SimplePath

A protocol representing a minimal subset of `pathlib.Path` that allows to
check if it `exists()`, to traverse using `joinpath()` and `parent`,
and to retrieve data using `read_text()` and `read_bytes()`.
