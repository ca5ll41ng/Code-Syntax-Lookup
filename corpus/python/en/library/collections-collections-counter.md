---
id: "python-en-function-collections-counter"
language: "python"
lang: "en"
category: "function"
name: "Counter"
signature: "Counter(**kwargs)"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.Counter"
license: "PSF"
updated: "2026-10-01"
---

# Counter

A `Counter` is a `dict` subclass for counting `hashable` objects.
It is a collection where elements are stored as dictionary keys
and their counts are stored as dictionary values.  Counts are allowed to be
any integer value including zero or negative counts.  The `Counter`
class is similar to bags or multisets in other languages.

Elements are counted from an *iterable* or initialized from another
*mapping* (or counter):

    >>> c = Counter()                           # a new, empty counter
    >>> c = Counter('gallahad')                 # a new counter from an iterable
    >>> c = Counter({'red': 4, 'blue': 2})      # a new counter from a mapping
    >>> c = Counter(cats=4, dogs=8)             # a new counter from keyword args

Counter objects have a dictionary interface except that they return a zero
count for missing items instead of raising a `KeyError`:

    >>> c = Counter(['eggs', 'ham'])
    >>> c['bacon']                              # count of a missing element is zero
    0

Setting a count to zero does not remove an element from a counter.
Use `del` to remove it entirely:

    >>> c['sausage'] = 0                        # counter entry with a zero count
    >>> del c['sausage']                        # del actually removes the entry

Counters maintain insertion order internally but display from most common to
least common when possible:

    >>> c = Counter(a=1, b=2, c=3)
    >>> c                                       # display most common to least
    Counter({'c': 3, 'b': 2, 'a': 1})
    >>> list(c.items())                         # original insertion order
    [('a', 1), ('b', 2), ('c', 3)]

> *Added in 3.1*

> *Changed in 3.7 As a :class:`dict` subclass, :class:`Counter`*: inherited the capability to remember insertion order.  Math operations on *Counter* objects also preserve order.  Results are ordered according to when an element is first encountered in the left operand and then by the order encountered in the right operand.

Counter objects support additional methods beyond those available for all
dictionaries:

method:: elements()

method:: most_common(n=None)

method:: subtract(**kwargs)

method:: total()

The usual dictionary methods are available for `Counter` objects
except for these two which work differently for counters:

method:: fromkeys(iterable)

method:: update(**kwargs)
