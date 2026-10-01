---
id: "python-en-function-test-check_impl_detail"
language: "python"
lang: "en"
category: "function"
name: "check_impl_detail"
signature: "check_impl_detail(**guards)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.check_impl_detail"
license: "PSF"
updated: "2026-10-01"
---

# check_impl_detail

Use this check to guard CPython's implementation-specific tests or to
run them only on the implementations guarded by the arguments.  This
function returns `True` or `False` depending on the host platform.
Example usage::

   check_impl_detail()               # Only on CPython (default).
   check_impl_detail(jython=True)    # Only on Jython.
   check_impl_detail(cpython=False)  # Everywhere except CPython.
