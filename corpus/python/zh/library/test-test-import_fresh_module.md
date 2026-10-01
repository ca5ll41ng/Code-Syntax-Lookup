---
id: "python-zh-function-test-import_fresh_module"
language: "python"
lang: "zh"
category: "function"
name: "import_fresh_module"
signature: "import_fresh_module(name, fresh=(), blocked=(), deprecated=False)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.import_fresh_module"
license: "PSF"
updated: "2026-10-01"
---

# import_fresh_module

This function imports and returns a fresh copy of the named Python module
by removing the named module from `sys.modules` before doing the import.
Note that unlike `reload`, the original module is not affected by
this operation.

*fresh* is an iterable of additional module names that are also removed
from the `sys.modules` cache before doing the import.

*blocked* is an iterable of module names that are replaced with `None`
in the module cache during the import to ensure that attempts to import
them raise `ImportError`.

The named module and any modules named in the *fresh* and *blocked*
parameters are saved before starting the import and then reinserted into
`sys.modules` when the fresh import is complete.

Module and package deprecation messages are suppressed during this import
if *deprecated* is `True`.

This function will raise `ImportError` if the named module cannot be
imported.

用法示例::

   # Get copies of the warnings module for testing without affecting the
   # version being used by the rest of the test suite. One copy uses the
   # C implementation, the other is forced to use the pure Python fallback
   # implementation
   py_warnings = import_fresh_module('warnings', blocked=['_warnings'])
   c_warnings = import_fresh_module('warnings', fresh=['_warnings'])

> *Added in 3.1*
