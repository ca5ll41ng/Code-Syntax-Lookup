---
id: "python-en-function-select-devpoll-unregister"
language: "python"
lang: "en"
category: "function"
name: "devpoll.unregister"
signature: "devpoll.unregister(fd)"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.devpoll.unregister"
license: "PSF"
updated: "2026-10-01"
---

# devpoll.unregister

Remove a file descriptor being tracked by a polling object.  Just like the
`register` method, *fd* can be an integer or an object with a
`~io.IOBase.fileno` method that returns an integer.

Attempting to remove a file descriptor that was never registered is
safely ignored.
