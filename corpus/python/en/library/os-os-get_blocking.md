---
id: "python-en-function-os-get_blocking"
language: "python"
lang: "en"
category: "function"
name: "get_blocking"
signature: "get_blocking(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.get_blocking"
license: "PSF"
updated: "2026-10-01"
---

# get_blocking

Get the blocking mode of the file descriptor: `False` if the
`O_NONBLOCK` flag is set, `True` if the flag is cleared.

See also `set_blocking` and `socket.socket.setblocking`.

availability:: Unix, Windows.

> *Added in 3.5*

> *Changed in 3.12*: Added support for pipes on Windows.
