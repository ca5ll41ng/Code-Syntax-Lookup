---
id: "python-zh-function-test-catch_unraisable_exception"
language: "python"
lang: "zh"
category: "function"
name: "catch_unraisable_exception"
signature: "catch_unraisable_exception()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.catch_unraisable_exception"
license: "PSF"
updated: "2026-10-01"
---

# catch_unraisable_exception

Context manager catching unraisable exception using
`sys.unraisablehook`.

Storing the exception value (`cm.unraisable.exc_value`) creates a
reference cycle. The reference cycle is broken explicitly when the context
manager exits.

Storing the object (`cm.unraisable.object`) can resurrect it if it is set
to an object which is being finalized. Exiting the context manager clears
the stored object.

用法：

    with support.catch_unraisable_exception() as cm:
        # code creating an "unraisable exception"
        ...

        # check the unraisable exception: use cm.unraisable
        ...

    # cm.unraisable attribute no longer exists at this point
    # (to break a reference cycle)

> *Added in 3.8*
