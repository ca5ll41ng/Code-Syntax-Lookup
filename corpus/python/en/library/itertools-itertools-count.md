---
id: "python-en-function-itertools-count"
language: "python"
lang: "en"
category: "function"
name: "count"
signature: "count(start=0, step=1)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.count"
license: "PSF"
updated: "2026-10-01"
---

# count

Make an iterator that returns evenly spaced values beginning with
*start*. Can be used with `map` to generate consecutive data
points or with `zip` to add sequence numbers.  Roughly
equivalent to::

   def count(start=0, step=1):
       # count(10) → 10 11 12 13 14 ...
       # count(2.5, 0.5) → 2.5 3.0 3.5 ...
       n = start
       while True:
           yield n
           n += step

When counting with floating-point numbers, better accuracy can sometimes be
achieved by substituting multiplicative code such as: `(start + step * i
for i in count())`.

> *Changed in 3.1*: Added *step* argument and allowed non-integer arguments.
