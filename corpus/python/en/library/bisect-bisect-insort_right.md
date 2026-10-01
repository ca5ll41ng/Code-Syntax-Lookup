---
id: "python-en-function-bisect-insort_right"
language: "python"
lang: "en"
category: "function"
name: "insort_right"
signature: "insort_right(a, x, lo=0, hi=len(a), *, key=None)"
directive: "function"
module: "bisect"
source_url: "https://docs.python.org/3/library/bisect.html#bisect.insort_right"
license: "PSF"
updated: "2026-10-01"
---

# insort_right

Similar to :py`~bisect.insort_left`, but inserting *x* in *a* after any existing
entries of *x*.

This function first runs :py`~bisect.bisect_right` to locate an insertion point.
Next, it runs the `~sequence.insert` method on *a* to insert *x* at the
appropriate position to maintain sort order.

To support inserting records in a table, the *key* function (if any) is
applied to *x* for the search step but not for the insertion step.

Keep in mind that the *O*\ (log *n*) search is dominated by the slow *O*\ (*n*)
insertion step.

> *Changed in 3.10*: Added the *key* parameter.
