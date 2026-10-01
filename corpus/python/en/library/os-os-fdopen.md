---
id: "python-en-function-os-fdopen"
language: "python"
lang: "en"
category: "function"
name: "fdopen"
signature: "fdopen(fd, *args, **kwargs)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fdopen"
license: "PSF"
updated: "2026-10-01"
---

# fdopen

Return an open file object connected to the file descriptor *fd*.  This is an
alias of the `open` built-in function and accepts the same arguments.
The only difference is that the first argument of `fdopen` must always
be an integer.
