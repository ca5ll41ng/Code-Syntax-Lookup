---
id: "python-en-function-itertools-cycle"
language: "python"
lang: "en"
category: "function"
name: "cycle"
signature: "cycle(iterable)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.cycle"
license: "PSF"
updated: "2026-10-01"
---

# cycle

Make an iterator returning elements from the *iterable* and saving a
copy of each.  When the iterable is `exhausted`, return elements from
the saved copy.  Repeats indefinitely.  Roughly equivalent to::

   def cycle(iterable):
       # cycle('ABCD') → A B C D A B C D A B C D ...

       saved = []
       for element in iterable:
           yield element
           saved.append(element)

       while saved:
           for element in saved:
               yield element

This itertool may require significant auxiliary storage (depending on
the length of the iterable).
