---
id: "python-en-function-weakref-weakkeydictionary"
language: "python"
lang: "en"
category: "function"
name: "WeakKeyDictionary"
signature: "WeakKeyDictionary([dict])"
directive: "class"
module: "weakref"
source_url: "https://docs.python.org/3/library/weakref.html#weakref.WeakKeyDictionary"
license: "PSF"
updated: "2026-10-01"
---

# WeakKeyDictionary

Mapping class that references keys weakly.  Entries in the dictionary will be
discarded when there is no longer a strong reference to the key.  This can be
used to associate additional data with an object owned by other parts of an
application without adding attributes to those objects.  This can be especially
useful with objects that override attribute accesses.

Note that when a key with equal value to an existing key (but not equal identity)
is inserted into the dictionary, it replaces the value but does not replace the
existing key. Due to this, when the reference to the original key is deleted, it
also deletes the entry in the dictionary::

   >>> class T(str): pass
   ...
   >>> k1, k2 = T(), T()
   >>> d = weakref.WeakKeyDictionary()
   >>> d[k1] = 1   # d = {k1: 1}
   >>> d[k2] = 2   # d = {k1: 2}
   >>> del k1      # d = {}

A workaround would be to remove the key prior to reassignment::

   >>> class T(str): pass
   ...
   >>> k1, k2 = T(), T()
   >>> d = weakref.WeakKeyDictionary()
   >>> d[k1] = 1   # d = {k1: 1}
   >>> del d[k1]
   >>> d[k2] = 2   # d = {k2: 2}
   >>> del k1      # d = {k2: 2}

> *Changed in 3.9*: Added support for ``|`` and ``|=`` operators, as specified in :pep:`584`.
