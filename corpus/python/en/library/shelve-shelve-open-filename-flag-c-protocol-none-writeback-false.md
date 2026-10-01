---
id: "python-en-function-shelve-open-filename-flag-c-protocol-none-writeback-false"
language: "python"
lang: "en"
category: "function"
name: "open(filename, flag='c', protocol=None, writeback=False, *, \\"
directive: "function"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.open(filename, flag='c', protocol=None, writeback=False, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# open(filename, flag='c', protocol=None, writeback=False, *, \

Open a persistent dictionary.  The filename specified is the base filename for
the underlying database.  As a side-effect, an extension may be added to the
filename and more than one file may be created.  By default, the underlying
database file is opened for reading and writing.  The optional *flag* parameter
has the same interpretation as the *flag* parameter of `dbm.open`.

By default, pickles created with `pickle.DEFAULT_PROTOCOL` are used
to serialize values.  The version of the pickle protocol can be specified
with the *protocol* parameter.

Because of Python semantics, a shelf cannot know when a mutable
persistent-dictionary entry is modified.  By default modified objects are
written *only* when assigned to the shelf (see `shelve-example`).  If the
optional *writeback* parameter is set to `True`, all entries accessed are also
cached in memory, and written back on `~Shelf.sync` and
`~Shelf.close`; this can make it handier to mutate mutable entries in
the persistent dictionary, but, if many entries are accessed, it can consume
vast amounts of memory for the cache, and it can make the close operation
very slow since all accessed entries are written back (there is no way to
determine which accessed entries are mutable, nor which ones were actually
mutated).

By default, `shelve` uses `pickle.dumps` and `pickle.loads`
for serializing and deserializing. This can be changed by supplying
*serializer* and *deserializer*, respectively.

The *serializer* argument must be a callable which takes an object `obj`
and the *protocol* as inputs and returns the representation `obj` as a
`bytes-like object`; the *protocol* value may be ignored by the
serializer.

The *deserializer* argument must be a callable which takes a serialized object
given as a `bytes` object and returns the corresponding object.

A `ShelveError` is raised if *serializer* is given but *deserializer*
is not, or vice-versa.

> *Changed in 3.10*: :const:`pickle.DEFAULT_PROTOCOL` is now used as the default pickle protocol.

> *Changed in 3.11*: Accepts :term:`path-like object` for filename.

> *Changed in 3.15*: Accepts custom *serializer* and *deserializer* functions in place of :func:`pickle.dumps` and :func:`pickle.loads`.

> **Note**
>
> Do not rely on the shelf being closed automatically; always call
> `~Shelf.close` explicitly when you don't need it any more, or
> use `shelve.open` as a context manager::
>
>     with shelve.open('spam') as db:
>         db['eggs'] = 'eggs'
>
