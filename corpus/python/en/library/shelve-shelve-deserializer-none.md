---
id: "python-en-function-shelve-deserializer-none"
language: "python"
lang: "en"
category: "function"
name: "deserializer=None)"
directive: "class"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.deserializer=None)"
license: "PSF"
updated: "2026-10-01"
---

# deserializer=None)

A subclass of `Shelf` which accepts a *filename* instead of a dict-like
object.  The underlying file will be opened using `dbm.open`.  By
default, the file will be created and opened for both read and write.  The
optional *flag* parameter has the same interpretation as for the
`.open` function.  The optional *protocol*, *writeback*, *serializer*
and *deserializer* parameters have the same interpretation as in
`~shelve.open`.

> *Changed in 3.15*: Added the *serializer* and *deserializer* parameters.
