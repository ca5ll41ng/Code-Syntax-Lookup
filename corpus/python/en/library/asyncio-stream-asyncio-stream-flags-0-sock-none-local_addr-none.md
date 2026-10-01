---
id: "python-en-function-asyncio-stream-flags-0-sock-none-local_addr-none"
language: "python"
lang: "en"
category: "function"
name: "flags=0, sock=None, local_addr=None, \\"
directive: "function"
module: "asyncio-stream"
source_url: "https://docs.python.org/3/library/asyncio-stream.html#asyncio-stream.flags=0, sock=None, local_addr=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# flags=0, sock=None, local_addr=None, \

Establish a network connection and return a pair of
`(reader, writer)` objects.

The returned *reader* and *writer* objects are instances of
`StreamReader` and `StreamWriter` classes.

*limit* determines the buffer size limit used by the
returned `StreamReader` instance.  By default the *limit*
is set to 64 KiB.

The rest of the arguments are passed directly to
`loop.create_connection`.

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> `StreamWriter` created. To close the socket, call its
> `~asyncio.StreamWriter.close` method.
>

> *Changed in 3.7*: Added the *ssl_handshake_timeout* parameter.

> *Changed in 3.8*: Added the *happy_eyeballs_delay* and *interleave* parameters.

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.
