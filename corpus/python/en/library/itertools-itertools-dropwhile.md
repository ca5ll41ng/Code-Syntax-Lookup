---
id: "python-en-function-itertools-dropwhile"
language: "python"
lang: "en"
category: "function"
name: "dropwhile"
signature: "dropwhile(predicate, iterable)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.dropwhile"
license: "PSF"
updated: "2026-10-01"
---

# dropwhile

Make an iterator that drops elements from the *iterable* while the
*predicate* is true and afterwards returns every element.  Roughly
equivalent to::

   def dropwhile(predicate, iterable):
       # dropwhile(lambda x: x<5, [1,4,6,3,8]) → 6 3 8

       iterator = iter(iterable)
       for x in iterator:
           if not predicate(x):
               yield x
               break

       for x in iterator:
           yield x

Note this does not produce *any* output until the predicate first
becomes false, so this itertool may have a lengthy start-up time.
