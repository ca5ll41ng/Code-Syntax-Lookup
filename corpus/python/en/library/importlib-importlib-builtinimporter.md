---
id: "python-en-function-importlib-builtinimporter"
language: "python"
lang: "en"
category: "function"
name: "BuiltinImporter"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.BuiltinImporter"
license: "PSF"
updated: "2026-10-01"
---

# BuiltinImporter

An `importer` for built-in modules. All known built-in modules are
listed in `sys.builtin_module_names`. This class implements the
`importlib.abc.MetaPathFinder` and
`importlib.abc.InspectLoader` ABCs.

Only class methods are defined by this class to alleviate the need for
instantiation.

> *Changed in 3.5*: As part of :pep:`489`, the builtin importer now implements :meth:`Loader.create_module <importlib.abc.Loader.create_module>` and :meth:`Loader.exec_module <importlib.abc.Loader.exec_module>`
