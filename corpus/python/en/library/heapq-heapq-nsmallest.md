---
id: "python-en-function-heapq-nsmallest"
language: "python"
lang: "en"
category: "function"
name: "nsmallest"
signature: "nsmallest(n, iterable, key=None)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.nsmallest"
license: "PSF"
updated: "2026-10-01"
---

# nsmallest

Return a list with the *n* smallest elements from the dataset defined by
*iterable*.  *key*, if provided, specifies a function of one argument that is
used to extract a comparison key from each element in *iterable* (for example,
`key=str.lower`).  Equivalent to:  `sorted(iterable, key=key)[:n]`.
