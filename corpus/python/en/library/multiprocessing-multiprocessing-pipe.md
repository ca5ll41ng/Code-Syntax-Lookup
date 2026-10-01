---
id: "python-en-function-multiprocessing-pipe"
language: "python"
lang: "en"
category: "function"
name: "Pipe"
signature: "Pipe(duplex=True)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Pipe"
license: "PSF"
updated: "2026-10-01"
---

# Pipe

Returns a pair `(conn1, conn2)` of
`~multiprocessing.connection.Connection` objects representing the
ends of a pipe.

If *duplex* is `True` (the default) then the pipe is bidirectional.  If
*duplex* is `False` then the pipe is unidirectional: `conn1` can only be
used for receiving messages and `conn2` can only be used for sending
messages.

The `~multiprocessing.Connection.send` method serializes the object using
`pickle` and the `~multiprocessing.Connection.recv` re-creates the object.
