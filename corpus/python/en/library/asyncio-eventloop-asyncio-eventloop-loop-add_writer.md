---
id: "python-en-function-asyncio-eventloop-loop-add_writer"
language: "python"
lang: "en"
category: "function"
name: "loop.add_writer"
signature: "loop.add_writer(fd, callback, *args)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.add_writer"
license: "PSF"
updated: "2026-10-01"
---

# loop.add_writer

Start monitoring the *fd* file descriptor for write availability and
invoke *callback* with the specified arguments *args* once *fd* is
available for writing.

Any preexisting callback registered for *fd* is cancelled and replaced by
*callback*.

Use `functools.partial` `to pass keyword arguments` to *callback*.
