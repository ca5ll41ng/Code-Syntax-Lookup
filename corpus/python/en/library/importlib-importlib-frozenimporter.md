---
id: "python-en-function-importlib-frozenimporter"
language: "python"
lang: "en"
category: "function"
name: "FrozenImporter"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.FrozenImporter"
license: "PSF"
updated: "2026-10-01"
---

# FrozenImporter

An `importer` for frozen modules. This class implements the
`importlib.abc.MetaPathFinder` and
`importlib.abc.InspectLoader` ABCs.

Only class methods are defined by this class to alleviate the need for
instantiation.

> *Changed in 3.4*: Gained :meth:`~importlib.abc.Loader.create_module` and :meth:`~importlib.abc.Loader.exec_module` methods.
