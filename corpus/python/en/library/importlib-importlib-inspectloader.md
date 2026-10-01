---
id: "python-en-function-importlib-inspectloader"
language: "python"
lang: "en"
category: "function"
name: "InspectLoader"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.InspectLoader"
license: "PSF"
updated: "2026-10-01"
---

# InspectLoader

An abstract base class for a `loader` which implements the optional
PEP 302 protocol for loaders that inspect modules.

method:: get_code(fullname)

method:: get_source(fullname)

method:: is_package(fullname)

staticmethod:: source_to_code(data, path='<string>', fullname=None)

method:: exec_module(module)
