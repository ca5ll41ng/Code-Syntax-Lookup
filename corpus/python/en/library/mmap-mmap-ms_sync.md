---
id: "python-en-function-mmap-ms_sync"
language: "python"
lang: "en"
category: "function"
name: "MS_SYNC"
directive: "data"
module: "mmap"
source_url: "https://docs.python.org/3/library/mmap.html#mmap.MS_SYNC"
license: "PSF"
updated: "2026-10-01"
---

# MS_SYNC

These flags control the synchronization behavior for `mmap.flush`:

* `MS_SYNC` - Synchronous flush: writes are scheduled and the call
  blocks until they are physically written to storage.
* `MS_ASYNC` - Asynchronous flush: writes are scheduled but the call
  returns immediately without waiting for completion.
* `MS_INVALIDATE` - Invalidate cached data: invalidates other mappings
  of the same file so they can see the changes.

> *Added in 3.15*
