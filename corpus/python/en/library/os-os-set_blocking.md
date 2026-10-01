---
id: "python-en-function-os-set_blocking"
language: "python"
lang: "en"
category: "function"
name: "set_blocking"
signature: "set_blocking(fd, blocking, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.set_blocking"
license: "PSF"
updated: "2026-10-01"
---

# set_blocking

Set the blocking mode of the specified file descriptor. Set the
`O_NONBLOCK` flag if blocking is `False`, clear the flag otherwise.

See also `get_blocking` and `socket.socket.setblocking`.

availability:: Unix, Windows.

> *Added in 3.5*

> *Changed in 3.12*: Added support for pipes on Windows.
