---
id: "python-en-function-shelve-keyencoding-utf-8"
language: "python"
lang: "en"
category: "function"
name: "keyencoding='utf-8', *, \\"
directive: "class"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.keyencoding='utf-8', *, \\"
license: "PSF"
updated: "2026-10-01"
---

# keyencoding='utf-8', *, \

A subclass of `Shelf` which exposes `first`, `next`,
`previous`, `last` and `set_location` methods.
These are available
in the third-party `bsddb` module from `pybsddb
<https://www.jcea.es/programacion/pybsddb.htm>`_ but not in other database
modules.  The *dict* object passed to the constructor must support those
methods.  This is generally accomplished by calling one of
`bsddb.hashopen`, `bsddb.btopen` or `bsddb.rnopen`.  The
optional *protocol*, *writeback*, *keyencoding*, *serializer* and *deserializer*
parameters have the same interpretation as in `~shelve.open`.

> *Changed in 3.15*: Added the *serializer* and *deserializer* parameters.
