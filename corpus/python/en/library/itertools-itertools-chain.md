---
id: "python-en-function-itertools-chain"
language: "python"
lang: "en"
category: "function"
name: "chain"
signature: "chain(*iterables)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.chain"
license: "PSF"
updated: "2026-10-01"
---

# chain

Make an iterator that returns elements from the first iterable until
it is `exhausted`, then proceeds to the next iterable, until all of the
iterables are exhausted.  This combines multiple data sources into a
single iterator.  Roughly equivalent to::

   def chain(*iterables):
       # chain('ABC', 'DEF') → A B C D E F
       for iterable in iterables:
           yield from iterable

Note that `unpacking in comprehensions`
provides similar functionality so that `list(chain(p, q))` could be
written as `[*s for s in (p, q)]`.
