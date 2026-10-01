---
id: "python-en-function-select-kqueue"
language: "python"
lang: "en"
category: "function"
name: "kqueue"
signature: "kqueue()"
directive: "function"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.kqueue"
license: "PSF"
updated: "2026-10-01"
---

# kqueue

Returns a kernel queue object; see section
`kqueue-objects` below for the methods supported by kqueue objects.

The new file descriptor is `non-inheritable`.

> *Changed in 3.4*: The new file descriptor is now non-inheritable.

availability:: BSD, macOS.
