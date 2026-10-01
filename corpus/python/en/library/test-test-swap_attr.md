---
id: "python-en-function-test-swap_attr"
language: "python"
lang: "en"
category: "function"
name: "swap_attr"
signature: "swap_attr(obj, attr, new_val)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.swap_attr"
license: "PSF"
updated: "2026-10-01"
---

# swap_attr

Context manager to swap out an attribute with a new object.

Usage::

   with swap_attr(obj, "attr", 5):
       ...

This will set `obj.attr` to 5 for the duration of the `with` block,
restoring the old value at the end of the block.  If `attr` doesn't
exist on `obj`, it will be created and then deleted at the end of the
block.

The old value (or `None` if it doesn't exist) will be assigned to the
target of the "as" clause, if there is one.
