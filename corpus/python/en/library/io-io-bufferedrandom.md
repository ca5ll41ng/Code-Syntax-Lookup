---
id: "python-en-function-io-bufferedrandom"
language: "python"
lang: "en"
category: "function"
name: "BufferedRandom"
signature: "BufferedRandom(raw, buffer_size=DEFAULT_BUFFER_SIZE)"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.BufferedRandom"
license: "PSF"
updated: "2026-10-01"
---

# BufferedRandom

A buffered binary stream implementing `BufferedIOBase` interfaces
providing higher-level access to a seekable `RawIOBase` raw binary
stream.

The constructor creates a reader and writer for a seekable raw stream, given
in the first argument.  If the *buffer_size* is omitted it defaults to
`DEFAULT_BUFFER_SIZE`.

`BufferedRandom` is capable of anything `BufferedReader` or
`BufferedWriter` can do.  In addition, `~IOBase.seek` and
`~IOBase.tell` are guaranteed to be implemented.
