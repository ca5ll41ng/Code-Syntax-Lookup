---
id: "python-en-function-importlib-sourceloader"
language: "python"
lang: "en"
category: "function"
name: "SourceLoader"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.SourceLoader"
license: "PSF"
updated: "2026-10-01"
---

# SourceLoader

An abstract base class for implementing source (and optionally bytecode)
file loading. The class inherits from both `ResourceLoader` and
`ExecutionLoader`, requiring the implementation of:

* `ResourceLoader.get_data`
* `ExecutionLoader.get_filename`
      Should only return the path to the source file; sourceless
      loading is not supported.

The abstract methods defined by this class are to add optional bytecode
file support. Not implementing these optional methods (or causing them to
raise `NotImplementedError`) causes the loader to
only work with source code. Implementing the methods allows the loader to
work with source *and* bytecode files; it does not allow for *sourceless*
loading where only bytecode is provided.  Bytecode files are an
optimization to speed up loading by removing the parsing step of Python's
compiler, and so no bytecode-specific API is exposed.

> *Changed in 3.15*: Removed the ``load_module()`` method.

method:: path_stats(path)

method:: path_mtime(path)

method:: set_data(path, data)

method:: get_code(fullname)

method:: exec_module(module)

method:: get_source(fullname)

method:: is_package(fullname)
