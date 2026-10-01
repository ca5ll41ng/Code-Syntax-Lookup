---
id: "python-en-function-importlib-namespaceloader"
language: "python"
lang: "en"
category: "function"
name: "NamespaceLoader"
signature: "NamespaceLoader(name, path, path_finder)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.NamespaceLoader"
license: "PSF"
updated: "2026-10-01"
---

# NamespaceLoader

A concrete implementation of `importlib.abc.InspectLoader` for
namespace packages.  This is an alias for a private class and is only made
public for introspecting the `__loader__` attribute on namespace
packages::

    >>> from importlib.machinery import NamespaceLoader
    >>> import my_namespace
    >>> isinstance(my_namespace.__loader__, NamespaceLoader)
    True
    >>> import importlib.abc
    >>> isinstance(my_namespace.__loader__, importlib.abc.Loader)
    True

> *Added in 3.11*
