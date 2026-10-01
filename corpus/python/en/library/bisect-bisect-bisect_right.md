---
id: "python-en-function-bisect-bisect_right"
language: "python"
lang: "en"
category: "function"
name: "bisect_right"
signature: "bisect_right(a, x, lo=0, hi=len(a), *, key=None)"
directive: "function"
module: "bisect"
source_url: "https://docs.python.org/3/library/bisect.html#bisect.bisect_right"
license: "PSF"
updated: "2026-10-01"
---

# bisect_right

Similar to :py`~bisect.bisect_left`, but returns an insertion point which comes
after (to the right of) any existing entries of *x* in *a*.

The returned insertion point *ip* partitions the array *a* into two slices
such that `all(elem <= x for elem in a[lo : ip])` is true for the left slice and
`all(elem > x for elem in a[ip : hi])` is true for the right slice.

> *Changed in 3.10*: Added the *key* parameter.
