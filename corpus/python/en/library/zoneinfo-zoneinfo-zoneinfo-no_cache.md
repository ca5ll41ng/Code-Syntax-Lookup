---
id: "python-en-function-zoneinfo-zoneinfo-no_cache"
language: "python"
lang: "en"
category: "function"
name: "ZoneInfo.no_cache"
signature: "ZoneInfo.no_cache(key)"
directive: "classmethod"
module: "zoneinfo"
source_url: "https://docs.python.org/3/library/zoneinfo.html#zoneinfo.ZoneInfo.no_cache"
license: "PSF"
updated: "2026-10-01"
---

# ZoneInfo.no_cache

An alternate constructor that bypasses the constructor's cache. It is
identical to the primary constructor, but returns a new object on each
call. This is most likely to be useful for testing or demonstration
purposes, but it can also be used to create a system with a different cache
invalidation strategy.

Objects created via this constructor will also bypass the cache of a
deserializing process when unpickled.

.. TODO: Add "See `cache_behavior`_" reference when that section is ready.

> **Caution**
>
> Using this constructor may change the semantics of your datetimes in
> surprising ways, only use it if you know that you need to.
>
