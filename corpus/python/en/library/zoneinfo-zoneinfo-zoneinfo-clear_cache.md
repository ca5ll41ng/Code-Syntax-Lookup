---
id: "python-en-function-zoneinfo-zoneinfo-clear_cache"
language: "python"
lang: "en"
category: "function"
name: "ZoneInfo.clear_cache"
signature: "ZoneInfo.clear_cache(*, only_keys=None)"
directive: "classmethod"
module: "zoneinfo"
source_url: "https://docs.python.org/3/library/zoneinfo.html#zoneinfo.ZoneInfo.clear_cache"
license: "PSF"
updated: "2026-10-01"
---

# ZoneInfo.clear_cache

A method for invalidating the cache on the `ZoneInfo` class. If no
arguments are passed, all caches are invalidated and the next call to
the primary constructor for each key will return a new instance.

If an iterable of key names is passed to the `only_keys` parameter, only
the specified keys will be removed from the cache. Keys passed to
`only_keys` but not found in the cache are ignored.

.. TODO: Add "See `cache_behavior`_" reference when that section is ready.

> **Warning**
>
> Invoking this function may change the semantics of datetimes using
> `ZoneInfo` in surprising ways; this modifies module state
> and thus may have wide-ranging effects. Only use it if you know that you
> need to.
>
