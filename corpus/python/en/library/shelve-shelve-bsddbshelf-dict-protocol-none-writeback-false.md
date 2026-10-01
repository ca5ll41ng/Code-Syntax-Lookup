---
id: "python-en-function-shelve-bsddbshelf-dict-protocol-none-writeback-false"
language: "python"
lang: "en"
category: "function"
name: "BsdDbShelf(dict, protocol=None, writeback=False, \\"
directive: "class"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.BsdDbShelf(dict, protocol=None, writeback=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# BsdDbShelf(dict, protocol=None, writeback=False, \

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
