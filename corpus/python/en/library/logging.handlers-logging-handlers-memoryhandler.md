---
id: "python-en-function-logging-handlers-memoryhandler"
language: "python"
lang: "en"
category: "function"
name: "MemoryHandler"
signature: "MemoryHandler(capacity, flushLevel=ERROR, target=None, flushOnClose=True)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.MemoryHandler"
license: "PSF"
updated: "2026-10-01"
---

# MemoryHandler

Returns a new instance of the `MemoryHandler` class. The instance is
initialized with a buffer size of *capacity* (number of records buffered).
If *flushLevel* is not specified, `ERROR` is used. If no *target* is
specified, the target will need to be set using `setTarget` before this
handler does anything useful. If *flushOnClose* is specified as `False`,
then the buffer is *not* flushed when the handler is closed. If not specified
or specified as `True`, the previous behaviour of flushing the buffer will
occur when the handler is closed.

> *Changed in 3.6*: The *flushOnClose* parameter was added.

method:: close()

method:: flush()

method:: setTarget(target)

method:: shouldFlush(record)
