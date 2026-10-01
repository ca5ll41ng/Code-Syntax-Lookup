---
id: "python-en-function-asyncio-stream-streamreader"
language: "python"
lang: "en"
category: "function"
name: "StreamReader"
directive: "class"
module: "asyncio-stream"
source_url: "https://docs.python.org/3/library/asyncio-stream.html#asyncio-stream.StreamReader"
license: "PSF"
updated: "2026-10-01"
---

# StreamReader

Represents a reader object that provides APIs to read data
from the IO stream. As an `asynchronous iterable`, the
object supports the `async for` statement.

It is not recommended to instantiate *StreamReader* objects
directly; use `open_connection` and `start_server`
instead.

method:: feed_eof()

method:: read(n=-1)

method:: readline()

method:: readexactly(n)

method:: readuntil(separator=b'\n')

method:: at_eof()
