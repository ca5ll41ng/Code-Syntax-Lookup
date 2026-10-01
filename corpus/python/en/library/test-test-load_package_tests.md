---
id: "python-en-function-test-load_package_tests"
language: "python"
lang: "en"
category: "function"
name: "load_package_tests"
signature: "load_package_tests(pkg_dir, loader, standard_tests, pattern)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.load_package_tests"
license: "PSF"
updated: "2026-10-01"
---

# load_package_tests

Generic implementation of the `unittest` `load_tests` protocol for
use in test packages.  *pkg_dir* is the root directory of the package;
*loader*, *standard_tests*, and *pattern* are the arguments expected by
`load_tests`.  In simple cases, the test package's `__init__.py`
can be the following::

   import os
   from test.support import load_package_tests

   def load_tests(*args):
       return load_package_tests(os.path.dirname(__file__), *args)
