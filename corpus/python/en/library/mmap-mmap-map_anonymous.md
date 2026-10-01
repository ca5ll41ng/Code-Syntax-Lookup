---
id: "python-en-function-mmap-map_anonymous"
language: "python"
lang: "en"
category: "function"
name: "MAP_ANONYMOUS"
directive: "data"
module: "mmap"
source_url: "https://docs.python.org/3/library/mmap.html#mmap.MAP_ANONYMOUS"
license: "PSF"
updated: "2026-10-01"
---

# MAP_ANONYMOUS

These are the various flags that can be passed to `mmap.mmap`.  `MAP_ALIGNED_SUPER`
is only available at FreeBSD and `MAP_CONCEAL` is only available at OpenBSD.  Note
that some options might not be present on some systems.

> *Changed in 3.10*: Added :data:`MAP_POPULATE` constant.

> *Added in 3.11*: Added :data:`MAP_STACK` constant.

> *Added in 3.12*: Added :data:`MAP_ALIGNED_SUPER` and :data:`MAP_CONCEAL` constants.

> *Added in 3.13*: Added :data:`MAP_32BIT`, :data:`MAP_HASSEMAPHORE`, :data:`MAP_JIT`, :data:`MAP_NOCACHE`, :data:`MAP_NOEXTEND`, :data:`MAP_NORESERVE`, :data:`MAP_RESILIENT_CODESIGN`, :data:`MAP_RESILIENT_MEDIA`, :data:`MAP_TPRO`, :data:`MAP_TRANSLATED_ALLOW_EXECUTE`, and :data:`MAP_UNIX03` constants.
