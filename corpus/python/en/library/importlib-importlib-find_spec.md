---
id: "python-en-function-importlib-find_spec"
language: "python"
lang: "en"
category: "function"
name: "find_spec"
signature: "find_spec(name, package=None)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.find_spec"
license: "PSF"
updated: "2026-10-01"
---

# find_spec

Find the `spec` for a module, optionally relative to
the specified **package** name. If the module is in `sys.modules`,
then `sys.modules[name].__spec__` is returned (unless the spec would be
`None` or is not set, in which case `ValueError` is raised).
Otherwise a search using `sys.meta_path` is done. `None` is
returned if no spec is found.

If **name** is for a submodule (contains a dot), the parent module is
automatically imported.

**name** and **package** work the same as for
`importlib.import_module`.

> *Added in 3.4*

> *Changed in 3.7*: Raises :exc:`ModuleNotFoundError` instead of :exc:`AttributeError` if **package** is in fact not a package (i.e. lacks a :attr:`~module.__path__` attribute).
