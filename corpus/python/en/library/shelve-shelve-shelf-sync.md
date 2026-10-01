---
id: "python-en-function-shelve-shelf-sync"
language: "python"
lang: "en"
category: "function"
name: "Shelf.sync"
signature: "Shelf.sync()"
directive: "method"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.Shelf.sync"
license: "PSF"
updated: "2026-10-01"
---

# Shelf.sync

Write back all entries in the cache if the shelf was opened with *writeback*
set to `True`.  Also empty the cache and synchronize the persistent
dictionary on disk, if feasible.  This is called automatically when
`reorganize` is called or the shelf is closed with `close`.
