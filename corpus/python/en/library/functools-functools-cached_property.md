---
id: "python-en-function-functools-cached_property"
language: "python"
lang: "en"
category: "function"
name: "cached_property"
signature: "cached_property(func)"
directive: "decorator"
module: "functools"
source_url: "https://docs.python.org/3/library/functools.html#functools.cached_property"
license: "PSF"
updated: "2026-10-01"
---

# cached_property

Transform a method of a class into a property whose value is computed once
and then cached as a normal attribute for the life of the instance. Similar
to `property`, with the addition of caching. Useful for expensive
computed properties of instances that are otherwise effectively immutable.

Example::

    class DataSet:

        def __init__(self, sequence_of_numbers):
            self._data = tuple(sequence_of_numbers)

        @cached_property
        def stdev(self):
            return statistics.stdev(self._data)

The mechanics of `cached_property` are somewhat different from
`property`.  A regular property blocks attribute writes unless a
setter is defined. In contrast, a *cached_property* allows writes.

The *cached_property* decorator only runs on lookups and only when an
attribute of the same name doesn't exist.  When it does run, the
*cached_property* writes to the attribute with the same name. Subsequent
attribute reads and writes take precedence over the *cached_property*
method and it works like a normal attribute.

The cached value can be cleared by deleting the attribute.  This
allows the *cached_property* method to run again.

The *cached_property* does not prevent a possible race condition in
multi-threaded usage. The getter function could run more than once on the
same instance, with the latest run setting the cached value. If the cached
property is idempotent or otherwise not harmful to run more than once on an
instance, this is fine. If synchronization is needed, implement the necessary
locking inside the decorated getter function or around the cached property
access.

Note, this decorator interferes with the operation of PEP 412
key-sharing dictionaries.  This means that instance dictionaries
can take more space than usual.

Also, this decorator requires that the `__dict__` attribute on each instance
be a mutable mapping. This means it will not work with some types, such as
metaclasses (since the `__dict__` attributes on type instances are
read-only proxies for the class namespace), and those that specify
`__slots__` without including `__dict__` as one of the defined slots
(as such classes don't provide a `__dict__` attribute at all).

If a mutable mapping is not available or if space-efficient key sharing is
desired, an effect similar to `cached_property` can also be achieved by
stacking `property` on top of `lru_cache`. See
`faq-cache-method-calls` for more details on how this differs from `cached_property`.

> *Added in 3.8*

> *Changed in 3.12*: Prior to Python 3.12, :deco:`!cached_property` included an undocumented lock to ensure that in multi-threaded usage the getter function was guaranteed to run only once per instance. However, the lock was per-property, not per-instance, which could result in unacceptably high lock contention. In Python 3.12+ this locking is removed.
