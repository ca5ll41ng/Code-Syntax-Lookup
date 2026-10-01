---
id: "python-en-function-bisect-bisect_left"
language: "python"
lang: "en"
category: "function"
name: "bisect_left"
signature: "bisect_left(a, x, lo=0, hi=len(a), *, key=None)"
directive: "function"
module: "bisect"
source_url: "https://docs.python.org/3/library/bisect.html#bisect.bisect_left"
license: "PSF"
updated: "2026-10-01"
---

# bisect_left

Locate the insertion point for *x* in *a* to maintain sorted order.
The parameters *lo* and *hi* may be used to specify a subset of the list
which should be considered; by default the entire list is used.  If *x* is
already present in *a*, the insertion point will be before (to the left of)
any existing entries.  The return value is suitable for use as the first
parameter to `list.insert()` assuming that *a* is already sorted.

The returned insertion point *ip* partitions the array *a* into two
slices such that `all(elem < x for elem in a[lo : ip])` is true for the
left slice and `all(elem >= x for elem in a[ip : hi])` is true for the
right slice.

*key* specifies a `key function` of one argument that is used to
extract a comparison key from each element in the array.  To support
searching complex records, the key function is not applied to the *x* value.

If *key* is `None`, the elements are compared directly and
no key function is called.

> *Changed in 3.10*: Added the *key* parameter.
