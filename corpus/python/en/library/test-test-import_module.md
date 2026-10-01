---
id: "python-en-function-test-import_module"
language: "python"
lang: "en"
category: "function"
name: "import_module"
signature: "import_module(name, deprecated=False, *, required_on=())"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.import_module"
license: "PSF"
updated: "2026-10-01"
---

# import_module

This function imports and returns the named module. Unlike a normal
import, this function raises `unittest.SkipTest` if the module
cannot be imported.

Module and package deprecation messages are suppressed during this import
if *deprecated* is `True`.  If a module is required on a platform but
optional for others, set *required_on* to an iterable of platform prefixes
which will be compared against `sys.platform`.

> *Added in 3.1*
