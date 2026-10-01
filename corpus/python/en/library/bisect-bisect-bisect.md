---
id: "python-en-function-bisect-bisect"
language: "python"
lang: "en"
category: "function"
name: "bisect"
title: "Performance Notes"
directive: "module"
module: "bisect"
source_url: "https://docs.python.org/3/library/bisect.html#module-bisect"
license: "PSF"
updated: "2026-10-01"
---

# Performance Notes

**Performance Notes**

When writing time sensitive code using *bisect()* and *insort()*, keep these
thoughts in mind:

* Bisection is effective for searching ranges of values.
  For locating specific values, dictionaries are more performant.

* The *insort()* functions are *O*\ (*n*) because the logarithmic search step
  is dominated by the linear time insertion step.

* The search functions are stateless and discard key function results after
  they are used.  Consequently, if the search functions are used in a loop,
  the key function may be called again and again on the same array elements.
  If the key function isn't fast, consider wrapping it with
  :py`functools.cache` to avoid duplicate computations.  Alternatively,
  consider searching an array of precomputed keys to locate the insertion
  point (as shown in the examples section below).

> **Seealso**
>
> * `Sorted Collections
>   <https://grantjenks.com/docs/sortedcollections/>`_ is a high performance
>   module that uses *bisect* to managed sorted collections of data.
>
> * The `SortedCollection recipe
>   <https://code.activestate.com/recipes/577197-sortedcollection/>`_ uses
>   bisect to build a full-featured collection class with straight-forward search
>   methods and support for a key-function.  The keys are precomputed to save
>   unnecessary calls to the key function during searches.
>

**Searching Sorted Lists**

The above `bisect functions`_ are useful for finding insertion points but
can be tricky or awkward to use for common searching tasks. The following five
functions show how to transform them into the standard lookups for sorted
lists::

    def index(a, x):
        'Locate the leftmost value exactly equal to x'
        i = bisect_left(a, x)
        if i != len(a) and a[i] == x:
            return i
        raise ValueError

    def find_lt(a, x):
        'Find rightmost value less than x'
        i = bisect_left(a, x)
        if i:
            return a[i-1]
        raise ValueError

    def find_le(a, x):
        'Find rightmost value less than or equal to x'
        i = bisect_right(a, x)
        if i:
            return a[i-1]
        raise ValueError

    def find_gt(a, x):
        'Find leftmost value greater than x'
        i = bisect_right(a, x)
        if i != len(a):
            return a[i]
        raise ValueError

    def find_ge(a, x):
        'Find leftmost item greater than or equal to x'
        i = bisect_left(a, x)
        if i != len(a):
            return a[i]
        raise ValueError

**Examples**

.. _bisect-example:

The :py`~bisect.bisect` function can be useful for numeric table lookups. This
example uses :py`~bisect.bisect` to look up a letter grade for an exam score (say)
based on a set of ordered numeric breakpoints: 90 and up is an 'A', 80 to 89 is
a 'B', and so on::

   >>> def grade(score):
   ...     i = bisect([60, 70, 80, 90], score)
   ...     return "FDCBA"[i]
   ...
   >>> [grade(score) for score in [33, 99, 77, 70, 89, 90, 100]]
   ['F', 'A', 'C', 'C', 'B', 'A', 'A']

The :py`~bisect.bisect` and :py`~bisect.insort` functions also work with
lists of tuples.  The *key* argument can serve to extract the field used for ordering
records in a table::

    >>> from collections import namedtuple
    >>> from operator import attrgetter
    >>> from bisect import bisect, insort
    >>> from pprint import pprint

    >>> Movie = namedtuple('Movie', ('name', 'released', 'director'))

    >>> movies = [
    ...     Movie('Jaws', 1975, 'Spielberg'),
    ...     Movie('Titanic', 1997, 'Cameron'),
    ...     Movie('The Birds', 1963, 'Hitchcock'),
    ...     Movie('Aliens', 1986, 'Cameron')
    ... ]

    >>> # Find the first movie released after 1960
    >>> by_year = attrgetter('released')
    >>> movies.sort(key=by_year)
    >>> movies[bisect(movies, 1960, key=by_year)]
    Movie(name='The Birds', released=1963, director='Hitchcock')

    >>> # Insert a movie while maintaining sort order
    >>> romance = Movie('Love Story', 1970, 'Hiller')
    >>> insort(movies, romance, key=by_year)
    >>> pprint(movies)
    [Movie(name='The Birds', released=1963, director='Hitchcock'),
     Movie(name='Love Story', released=1970, director='Hiller'),
     Movie(name='Jaws', released=1975, director='Spielberg'),
     Movie(name='Aliens', released=1986, director='Cameron'),
     Movie(name='Titanic', released=1997, director='Cameron')]

If the key function is expensive, it is possible to avoid repeated function
calls by searching a list of precomputed keys to find the index of a record::

    >>> data = [('red', 5), ('blue', 1), ('yellow', 8), ('black', 0)]
    >>> data.sort(key=lambda r: r[1])       # Or use operator.itemgetter(1).
    >>> keys = [r[1] for r in data]         # Precompute a list of keys.
    >>> data[bisect_left(keys, 0)]
    ('black', 0)
    >>> data[bisect_left(keys, 1)]
    ('blue', 1)
    >>> data[bisect_left(keys, 5)]
    ('red', 5)
    >>> data[bisect_left(keys, 8)]
    ('yellow', 8)
