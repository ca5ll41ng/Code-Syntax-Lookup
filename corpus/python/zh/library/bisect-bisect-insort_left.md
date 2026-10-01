---
id: "python-zh-function-bisect-insort_left"
language: "python"
lang: "zh"
category: "function"
name: "insort_left"
signature: "insort_left(a, x, lo=0, hi=len(a), *, key=None)"
directive: "function"
module: "bisect"
source_url: "https://docs.python.org/zh-cn/3/library/bisect.html#bisect.insort_left"
license: "PSF"
updated: "2026-10-01"
---

# insort_left

按照已排序顺序将 *x* 插入到 *a* 中。

This function first runs :py`~bisect.bisect_left` to locate an insertion point.
Next, it runs the `~sequence.insert` method on *a* to insert *x* at the
appropriate position to maintain sort order.

To support inserting records in a table, the *key* function (if any) is
applied to *x* for the search step but not for the insertion step.

Keep in mind that the *O*\ (log *n*) search is dominated by the slow *O*\ (*n*)
insertion step.

> *Changed in 3.10*: Added the *key* parameter.
