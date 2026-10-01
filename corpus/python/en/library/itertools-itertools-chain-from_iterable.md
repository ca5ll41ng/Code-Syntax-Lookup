---
id: "python-en-function-itertools-chain-from_iterable"
language: "python"
lang: "en"
category: "function"
name: "chain.from_iterable"
signature: "chain.from_iterable(iterable)"
directive: "classmethod"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.chain.from_iterable"
license: "PSF"
updated: "2026-10-01"
---

# chain.from_iterable

Alternate constructor for `chain`.  Gets chained inputs from a
single iterable argument that is evaluated lazily.  Roughly equivalent to::

   def from_iterable(iterables):
       # chain.from_iterable(['ABC', 'DEF']) → A B C D E F
       for iterable in iterables:
           yield from iterable

Note that `unpacking in comprehensions`
provides similar functionality so that `list(chain.from_iterable(iterables))`
could be written as `[*s for s in iterables]`.
