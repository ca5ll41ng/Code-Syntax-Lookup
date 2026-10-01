---
id: "python-en-function-asyncio-stream-streamwriter"
language: "python"
lang: "en"
category: "function"
name: "StreamWriter"
directive: "class"
module: "asyncio-stream"
source_url: "https://docs.python.org/3/library/asyncio-stream.html#asyncio-stream.StreamWriter"
license: "PSF"
updated: "2026-10-01"
---

# StreamWriter

Represents a writer object that provides APIs to write data
to the IO stream.

It is not recommended to instantiate *StreamWriter* objects
directly; use `open_connection` and `start_server`
instead.

method:: write(data)

method:: writelines(data)

method:: close()

method:: can_write_eof()

method:: write_eof()

attribute:: transport

method:: get_extra_info(name, default=None)

method:: drain()

method:: start_tls(sslcontext, *, server_hostname=None, \

method:: is_closing()

method:: wait_closed()
