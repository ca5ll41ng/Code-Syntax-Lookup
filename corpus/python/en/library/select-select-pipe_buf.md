---
id: "python-en-function-select-pipe_buf"
language: "python"
lang: "en"
category: "function"
name: "PIPE_BUF"
directive: "data"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.PIPE_BUF"
license: "PSF"
updated: "2026-10-01"
---

# PIPE_BUF

The minimum number of bytes which can be written without blocking to a pipe
when the pipe has been reported as ready for writing by `~select.select`,
`poll` or another interface in this module.  This doesn't apply
to other kinds of file-like objects such as sockets.

This value is guaranteed by POSIX to be at least 512.

availability:: Unix

> *Added in 3.2*
