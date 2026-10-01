---
id: "python-en-function-multiprocessing-buffertooshort"
language: "python"
lang: "en"
category: "function"
name: "BufferTooShort"
directive: "exception"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.BufferTooShort"
license: "PSF"
updated: "2026-10-01"
---

# BufferTooShort

Exception raised by `Connection.recv_bytes_into` when the supplied
buffer object is too small for the message read.

If `e` is an instance of `BufferTooShort` then `e.args[0]` will give
the message as a byte string.
