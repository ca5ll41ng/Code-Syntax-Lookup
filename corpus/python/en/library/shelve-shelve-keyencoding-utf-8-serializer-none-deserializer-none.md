---
id: "python-en-function-shelve-keyencoding-utf-8-serializer-none-deserializer-none"
language: "python"
lang: "en"
category: "function"
name: "keyencoding='utf-8', *, serializer=None, deserializer=None)"
directive: "class"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.keyencoding='utf-8', *, serializer=None, deserializer=None)"
license: "PSF"
updated: "2026-10-01"
---

# keyencoding='utf-8', *, serializer=None, deserializer=None)

A subclass of `collections.abc.MutableMapping` which stores pickled
values in the *dict* object.

By default, pickles created with `pickle.DEFAULT_PROTOCOL` are used
to serialize values.  The version of the pickle protocol can be specified
with the *protocol* parameter.  See the `pickle` documentation for a
discussion of the pickle protocols.

If the *writeback* parameter is `True`, the object will hold a cache of all
entries accessed and write them back to the *dict* at sync and close times.
This allows natural operations on mutable entries, but can consume much more
memory and make sync and close take a long time.

The *keyencoding* parameter is the encoding used to encode keys before they
are used with the underlying dict.

The *serializer* and *deserializer* parameters have the same interpretation
as in `~shelve.open`.

A `Shelf` object can also be used as a context manager, in which
case it will be automatically closed when the `with` block ends.

> *Changed in 3.2*: Added the *keyencoding* parameter; previously, keys were always encoded in UTF-8.

> *Changed in 3.4*: Added context manager support.

> *Changed in 3.10*: :const:`pickle.DEFAULT_PROTOCOL` is now used as the default pickle protocol.

> *Changed in 3.15*: Added the *serializer* and *deserializer* parameters.
