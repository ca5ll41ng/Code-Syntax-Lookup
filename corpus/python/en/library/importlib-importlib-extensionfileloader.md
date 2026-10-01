---
id: "python-en-function-importlib-extensionfileloader"
language: "python"
lang: "en"
category: "function"
name: "ExtensionFileLoader"
signature: "ExtensionFileLoader(fullname, path)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.ExtensionFileLoader"
license: "PSF"
updated: "2026-10-01"
---

# ExtensionFileLoader

A concrete implementation of `importlib.abc.ExecutionLoader` for
extension modules.

The *fullname* argument specifies the name of the module the loader is to
support. The *path* argument is the path to the extension module's file.

Note that, by default, importing an extension module will fail
in subinterpreters if it doesn't implement multi-phase init
(see PEP 489), even if it would otherwise import successfully.

> *Added in 3.3*

> *Changed in 3.12*: Multi-phase init is now required for use in subinterpreters.

attribute:: name

attribute:: path

method:: create_module(spec)

method:: exec_module(module)

method:: is_package(fullname)

method:: get_code(fullname)

method:: get_source(fullname)

method:: get_filename(fullname)
