---
id: "python-en-function-gc-get_referrers"
language: "python"
lang: "en"
category: "function"
name: "get_referrers"
signature: "get_referrers(*objs)"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.get_referrers"
license: "PSF"
updated: "2026-10-01"
---

# get_referrers

Return the list of objects that directly refer to any of objs. This function
will only locate those containers which support garbage collection; extension
types which do refer to other objects but do not support garbage collection will
not be found.

Note that objects which have already been dereferenced, but which live in cycles
and have not yet been collected by the garbage collector can be listed among the
resulting referrers.  To get only currently live objects, call `collect`
before calling `get_referrers`.

> **Warning**
>
> Care must be taken when using objects returned by `get_referrers` because
> some of them could still be under construction and hence in a temporarily
> invalid state. Avoid using `get_referrers` for any purpose other than
> debugging.
>

audit-event:: gc.get_referrers objs gc.get_referrers
