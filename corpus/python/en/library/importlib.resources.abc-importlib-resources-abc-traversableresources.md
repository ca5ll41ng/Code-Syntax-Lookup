---
id: "python-en-function-importlib-resources-abc-traversableresources"
language: "python"
lang: "en"
category: "function"
name: "TraversableResources"
directive: "class"
module: "importlib.resources.abc"
source_url: "https://docs.python.org/3/library/importlib.resources.abc.html#importlib.resources.abc.TraversableResources"
license: "PSF"
updated: "2026-10-01"
---

# TraversableResources

An abstract base class for resource readers capable of serving
the `importlib.resources.files` interface. Subclasses
`ResourceReader` and provides
concrete implementations of the `ResourceReader`'s
abstract methods. Therefore, any loader supplying
`TraversableResources` also supplies `ResourceReader`.

Loaders that wish to support resource reading are expected to
implement this interface.

method:: files()
