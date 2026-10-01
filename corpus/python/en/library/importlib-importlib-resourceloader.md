---
id: "python-en-function-importlib-resourceloader"
language: "python"
lang: "en"
category: "function"
name: "ResourceLoader"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.ResourceLoader"
license: "PSF"
updated: "2026-10-01"
---

# ResourceLoader

*Superseded by TraversableResources*

 An abstract base class for a `loader` which implements the optional
 PEP 302 protocol for loading arbitrary resources from the storage
 back-end.

> *Deprecated since 3.7*: This ABC is deprecated in favour of supporting resource loading through :class:`importlib.resources.abc.TraversableResources`. This class exists for backwards compatibility only with other ABCs in this module.

 method:: get_data(path)
