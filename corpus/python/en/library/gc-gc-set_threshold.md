---
id: "python-en-function-gc-set_threshold"
language: "python"
lang: "en"
category: "function"
name: "set_threshold"
signature: "set_threshold(threshold0, [threshold1, [threshold2]])"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.set_threshold"
license: "PSF"
updated: "2026-10-01"
---

# set_threshold

Set the garbage collection thresholds (the collection frequency). Setting
*threshold0* to zero disables collection.

The GC classifies objects into three generations depending on how many
collection sweeps they have survived.  New objects are placed in the youngest
generation (generation `0`).  If an object survives a collection it is moved
into the next older generation.  Since generation `2` is the oldest
generation, objects in that generation remain there after a collection.  In
order to decide when to run, the collector keeps track of the number object
allocations and deallocations since the last collection.  When the number of
allocations minus the number of deallocations exceeds *threshold0*, collection
starts.  Initially only generation `0` is examined.  If generation `0` has
been examined more than *threshold1* times since generation `1` has been
examined, then generation `1` is examined as well.
With the third generation, things are a bit more complicated,
see [Collecting the oldest generation](https://github.com/python/cpython/blob/ff0ef0a54bef26fc507fbf9b7a6009eb7d3f17f5/InternalDocs/garbage_collector.md#collecting-the-oldest-generation) for more information.

See [Garbage collector design](https://github.com/python/cpython/blob/3.15/InternalDocs/garbage_collector.md) for more information.

> *Changed in 3.14*: *threshold2* is ignored

> *Changed in 3.14.5*: *threshold2* is restored to match Python 3.13 behavior.
