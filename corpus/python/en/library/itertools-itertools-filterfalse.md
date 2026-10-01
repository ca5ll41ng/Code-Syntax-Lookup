---
id: "python-en-function-itertools-filterfalse"
language: "python"
lang: "en"
category: "function"
name: "filterfalse"
signature: "filterfalse(predicate, iterable)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.filterfalse"
license: "PSF"
updated: "2026-10-01"
---

# filterfalse

Make an iterator that filters elements from the *iterable* returning
only those for which the *predicate* returns a false value.  If
*predicate* is `None`, returns the items that are false.  Roughly
equivalent to::

   def filterfalse(predicate, iterable):
       # filterfalse(lambda x: x<5, [1,4,6,3,8]) → 6 8

       if predicate is None:
           predicate = bool

       for x in iterable:
           if not predicate(x):
               yield x
