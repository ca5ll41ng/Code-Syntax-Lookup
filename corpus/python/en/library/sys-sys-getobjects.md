---
id: "python-en-function-sys-getobjects"
language: "python"
lang: "en"
category: "function"
name: "getobjects"
signature: "getobjects(limit[, type])"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getobjects"
license: "PSF"
updated: "2026-10-01"
---

# getobjects

This function only exists if CPython was built using the
specialized configure option `--with-trace-refs`.
It is intended only for debugging garbage-collection issues.

Return a list of up to *limit* dynamically allocated Python objects.
If *type* is given, only objects of that exact type (not subtypes)
are included.

Objects from the list are not safe to use.
Specifically, the result will include objects from all interpreters that
share their object allocator state (that is, ones created with
:c`PyInterpreterConfig.use_main_obmalloc` set to 1
or using :c`Py_NewInterpreter`, and the
`main interpreter`).
Mixing objects from different interpreters may lead to crashes
or other unexpected behavior.

impl-detail::

> *Changed in 3.14*: The result may include objects from other interpreters.
