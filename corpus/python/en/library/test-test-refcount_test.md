---
id: "python-en-function-test-refcount_test"
language: "python"
lang: "en"
category: "function"
name: "refcount_test"
directive: "decorator"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.refcount_test"
license: "PSF"
updated: "2026-10-01"
---

# refcount_test

Decorator for tests which involve reference counting.  The decorator does
not run the test if it is not run by CPython.  Any trace function is unset
for the duration of the test to prevent unexpected refcounts caused by
the trace function.
