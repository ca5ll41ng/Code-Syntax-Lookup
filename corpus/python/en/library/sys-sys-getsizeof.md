---
id: "python-en-function-sys-getsizeof"
language: "python"
lang: "en"
category: "function"
name: "getsizeof"
signature: "getsizeof(object[, default])"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getsizeof"
license: "PSF"
updated: "2026-10-01"
---

# getsizeof

Return the size of an object in bytes. The object can be any type of
object. All built-in objects will return correct results, but this
does not have to hold true for third-party extensions as it is implementation
specific.

Only the memory consumption directly attributed to the object is
accounted for, not the memory consumption of objects it refers to.

If given, *default* will be returned if the object does not provide means to
retrieve the size.  Otherwise a `TypeError` will be raised.

`getsizeof` calls the object's `__sizeof__` method and adds an
additional garbage collector overhead if the object is managed by the garbage
collector.

See [recursive sizeof recipe](https://code.activestate.com/recipes/577504-compute-memory-footprint-of-an-object-and-its-cont/)
for an example of using `getsizeof` recursively to find the size of
containers and all their contents.
