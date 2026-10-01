---
id: "python-en-function-builtins-next"
language: "python"
lang: "en"
category: "function"
name: "next"
signature: "next(iterator, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#next"
license: "PSF"
updated: "2026-10-01"
---

# next

Retrieve the next item from the `iterator` by calling its
`~iterator.__next__` method.  If *default* is given, it is returned
if the iterator is `exhausted`, otherwise `StopIteration` is raised.
