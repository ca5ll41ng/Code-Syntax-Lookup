---
id: "python-en-function-select-epoll-unregister"
language: "python"
lang: "en"
category: "function"
name: "epoll.unregister"
signature: "epoll.unregister(fd)"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.epoll.unregister"
license: "PSF"
updated: "2026-10-01"
---

# epoll.unregister

Remove a registered file descriptor from the epoll object.

> *Changed in 3.9*: The method no longer ignores the :data:`~errno.EBADF` error.
