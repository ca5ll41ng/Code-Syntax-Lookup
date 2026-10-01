---
id: "python-en-function-sys-getrefcount"
language: "python"
lang: "en"
category: "function"
name: "getrefcount"
signature: "getrefcount(object)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getrefcount"
license: "PSF"
updated: "2026-10-01"
---

# getrefcount

Return the reference count of the *object*.  The count returned is generally one
higher than you might expect, because it includes the (temporary) reference as
an argument to `getrefcount`.

Note that the returned value may not actually reflect how many
references to the object are actually held.  For example, some
objects are `immortal` and have a very high refcount that does not
reflect the actual number of references.  Consequently, do not rely
on the returned value to be accurate, other than a value of 0 or 1.

impl-detail::

> *Changed in 3.12*: Immortal objects have very large refcounts that do not match the actual number of references to the object.
