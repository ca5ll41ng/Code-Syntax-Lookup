---
id: "python-en-function-test-ignore_warnings"
language: "python"
lang: "en"
category: "function"
name: "ignore_warnings"
signature: "ignore_warnings(*, category)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.ignore_warnings"
license: "PSF"
updated: "2026-10-01"
---

# ignore_warnings

Suppress warnings that are instances of *category*,
which must be `Warning` or a subclass.
Roughly equivalent to `warnings.catch_warnings`
with `warnings.simplefilter('ignore', category=category)`.
For example::

   @warning_helper.ignore_warnings(category=DeprecationWarning)
   def test_suppress_warning():
       # do something

> *Added in 3.8*
