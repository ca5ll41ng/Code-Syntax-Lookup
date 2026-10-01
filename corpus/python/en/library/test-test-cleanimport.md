---
id: "python-en-function-test-cleanimport"
language: "python"
lang: "en"
category: "function"
name: "CleanImport"
signature: "CleanImport(*module_names)"
directive: "class"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.CleanImport"
license: "PSF"
updated: "2026-10-01"
---

# CleanImport

A context manager to force import to return a new module reference.  This
is useful for testing module-level behaviors, such as the emission of a
`DeprecationWarning` on import.  Example usage::

   with CleanImport('foo'):
       importlib.import_module('foo')  # New reference.
