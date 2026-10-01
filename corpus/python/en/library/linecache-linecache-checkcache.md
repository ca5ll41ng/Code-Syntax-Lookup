---
id: "python-en-function-linecache-checkcache"
language: "python"
lang: "en"
category: "function"
name: "checkcache"
signature: "checkcache(filename=None)"
directive: "function"
module: "linecache"
source_url: "https://docs.python.org/3/library/linecache.html#linecache.checkcache"
license: "PSF"
updated: "2026-10-01"
---

# checkcache

Check the cache for validity.  Use this function if files in the cache  may have
changed on disk, and you require the updated version.  If *filename* is omitted,
it will check all the entries in the cache.
