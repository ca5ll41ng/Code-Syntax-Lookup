---
id: "python-en-function-select-devpoll"
language: "python"
lang: "en"
category: "function"
name: "devpoll"
signature: "devpoll()"
directive: "function"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.devpoll"
license: "PSF"
updated: "2026-10-01"
---

# devpoll

Returns a `/dev/poll`
polling object; see section `devpoll-objects` below for the
methods supported by devpoll objects.

:c`devpoll` objects are linked to the number of file
descriptors allowed at the time of instantiation. If your program
reduces this value, :c`devpoll` will fail. If your program
increases this value, :c`devpoll` may return an
incomplete list of active file descriptors.

The new file descriptor is `non-inheritable`.

> *Added in 3.3*

> *Changed in 3.4*: The new file descriptor is now non-inheritable.

availability:: Solaris.
