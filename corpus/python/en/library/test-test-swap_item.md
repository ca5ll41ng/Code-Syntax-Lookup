---
id: "python-en-function-test-swap_item"
language: "python"
lang: "en"
category: "function"
name: "swap_item"
signature: "swap_item(obj, attr, new_val)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.swap_item"
license: "PSF"
updated: "2026-10-01"
---

# swap_item

Context manager to swap out an item with a new object.

Usage::

   with swap_item(obj, "item", 5):
       ...

This will set `obj["item"]` to 5 for the duration of the `with` block,
restoring the old value at the end of the block. If `item` doesn't
exist on `obj`, it will be created and then deleted at the end of the
block.

The old value (or `None` if it doesn't exist) will be assigned to the
target of the "as" clause, if there is one.
