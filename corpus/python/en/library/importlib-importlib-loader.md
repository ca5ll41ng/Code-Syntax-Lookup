---
id: "python-en-function-importlib-loader"
language: "python"
lang: "en"
category: "function"
name: "Loader"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.Loader"
license: "PSF"
updated: "2026-10-01"
---

# Loader

An abstract base class for a `loader`.
 See PEP 302 for the exact definition for a loader.

 Loaders that wish to support resource reading should implement a
 `get_resource_reader` method as specified by
 `importlib.resources.abc.ResourceReader`.

> *Changed in 3.7*: Introduced the optional :meth:`!get_resource_reader` method.

> *Changed in 3.15*: Removed the ``load_module()`` method.  .. method:: create_module(spec)     A method that returns the module object to use when    importing a module.  This method may return ``None``,    indicating that default module creation semantics should take place.     .. versionadded:: 3.4     .. versionchanged:: 3.6       This method is no longer optional when       :meth:`exec_module` is defined.  .. method:: exec_module(module)     An abstract method that executes the module in its own namespace    when a module is imported or reloaded.  The module should already    be initialized when :meth:`exec_module` is called.  When this method exists,    :meth:`create_module` must be defined.     .. versionadded:: 3.4     .. versionchanged:: 3.6       :meth:`create_module` must also be defined.
