---
id: "python-en-function-asyncio-eventloop-loop-add_reader"
language: "python"
lang: "en"
category: "function"
name: "loop.add_reader"
signature: "loop.add_reader(fd, callback, *args)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.add_reader"
license: "PSF"
updated: "2026-10-01"
---

# loop.add_reader

Start monitoring the *fd* file descriptor for read availability and
invoke *callback* with the specified arguments once *fd* is available for
reading.

Any preexisting callback registered for *fd* is cancelled and replaced by
*callback*.
