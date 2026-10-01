---
id: "python-en-function-importlib-executionloader"
language: "python"
lang: "en"
category: "function"
name: "ExecutionLoader"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.ExecutionLoader"
license: "PSF"
updated: "2026-10-01"
---

# ExecutionLoader

An abstract base class which inherits from `InspectLoader` that,
when implemented, helps a module to be executed as a script. The ABC
represents an optional PEP 302 protocol.

method:: get_filename(fullname)
