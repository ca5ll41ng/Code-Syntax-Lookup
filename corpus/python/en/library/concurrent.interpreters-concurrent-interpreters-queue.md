---
id: "python-en-function-concurrent-interpreters-queue"
language: "python"
lang: "en"
category: "function"
name: "Queue"
signature: "Queue(id)"
directive: "class"
module: "concurrent.interpreters"
source_url: "https://docs.python.org/3/library/concurrent.interpreters.html#concurrent.interpreters.Queue"
license: "PSF"
updated: "2026-10-01"
---

# Queue

A wrapper around a low-level, cross-interpreter queue, which
implements the `queue.Queue` interface.  The underlying queue
can only be created through `create_queue`.

Some objects are actually shared and some are copied efficiently,
but most are copied via `pickle`.  See `interp-object-sharing`.

attribute:: id
