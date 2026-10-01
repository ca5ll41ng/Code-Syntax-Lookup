---
id: "python-en-function-builtins-enumerate"
language: "python"
lang: "en"
category: "function"
name: "enumerate"
signature: "enumerate(iterable, start=0)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#enumerate"
license: "PSF"
updated: "2026-10-01"
---

# enumerate

Return an enumerate object. *iterable* must be a sequence, an
`iterator`, or some other object which supports iteration.
The `~iterator.__next__` method of the iterator returned by
`enumerate` returns a tuple containing a count (from *start* which
defaults to 0) and the values obtained from iterating over *iterable*.

   >>> seasons = ['Spring', 'Summer', 'Fall', 'Winter']
   >>> list(enumerate(seasons))
   [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
   >>> list(enumerate(seasons, start=1))
   [(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]

Equivalent to::

   def enumerate(iterable, start=0):
       n = start
       for elem in iterable:
           yield n, elem
           n += 1
