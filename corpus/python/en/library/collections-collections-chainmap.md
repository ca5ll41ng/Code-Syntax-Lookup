---
id: "python-en-function-collections-chainmap"
language: "python"
lang: "en"
category: "function"
name: "ChainMap"
signature: "ChainMap(*maps)"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.ChainMap"
license: "PSF"
updated: "2026-10-01"
---

# ChainMap

A `ChainMap` groups multiple dicts or other mappings together to
create a single, updateable view.  If no *maps* are specified, a single empty
dictionary is provided so that a new chain always has at least one mapping.

The underlying mappings are stored in a list.  That list is public and can
be accessed or updated using the *maps* attribute.  There is no other state.

Lookups search the underlying mappings successively until a key is found.  In
contrast, writes, updates, and deletions only operate on the first mapping.

A `ChainMap` incorporates the underlying mappings by reference.  So, if
one of the underlying mappings gets updated, those changes will be reflected
in `ChainMap`.

All of the usual dictionary methods are supported.  In addition, there is a
*maps* attribute, a method for creating new subcontexts, and a property for
accessing all but the first mapping:

attribute:: maps

method:: new_child(m=None, **kwargs)

attribute:: parents

Note, the iteration order of a `ChainMap` is determined by
scanning the mappings last to first::

    >>> baseline = {'music': 'bach', 'art': 'rembrandt'}
    >>> adjustments = {'art': 'van gogh', 'opera': 'carmen'}
    >>> list(ChainMap(adjustments, baseline))
    ['music', 'art', 'opera']

This gives the same ordering as a series of `dict.update` calls
starting with the last mapping::

    >>> combined = baseline.copy()
    >>> combined.update(adjustments)
    >>> list(combined)
    ['music', 'art', 'opera']

> *Changed in 3.9*: Added support for ``|`` and ``|=`` operators, specified in :pep:`584`.
