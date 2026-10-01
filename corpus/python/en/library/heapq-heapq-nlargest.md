---
id: "python-en-function-heapq-nlargest"
language: "python"
lang: "en"
category: "function"
name: "nlargest"
signature: "nlargest(n, iterable, key=None)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.nlargest"
license: "PSF"
updated: "2026-10-01"
---

# nlargest

Return a list with the *n* largest elements from the dataset defined by
*iterable*.  *key*, if provided, specifies a function of one argument that is
used to extract a comparison key from each element in *iterable* (for example,
`key=str.lower`).  Equivalent to:  `sorted(iterable, key=key,
reverse=True)[:n]`.
