---
id: "python-en-function-itertools-starmap"
language: "python"
lang: "en"
category: "function"
name: "starmap"
signature: "starmap(function, iterable)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.starmap"
license: "PSF"
updated: "2026-10-01"
---

# starmap

Make an iterator that computes the *function* using arguments obtained
from the *iterable*.  Used instead of `map` when argument
parameters have already been "pre-zipped" into tuples.

The difference between `map` and `starmap` parallels the
distinction between `function(a,b)` and `function(*c)`. Roughly
equivalent to::

   def starmap(function, iterable):
       # starmap(pow, [(2,5), (3,2), (10,3)]) → 32 9 1000
       for args in iterable:
           yield function(*args)
