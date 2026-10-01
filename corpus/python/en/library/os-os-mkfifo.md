---
id: "python-en-function-os-mkfifo"
language: "python"
lang: "en"
category: "function"
name: "mkfifo"
signature: "mkfifo(path, mode=0o666, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.mkfifo"
license: "PSF"
updated: "2026-10-01"
---

# mkfifo

Create a FIFO (a named pipe) named *path* with numeric mode *mode*.
The current umask value is first masked out from the mode.

This function can also support `paths relative to directory descriptors`.

FIFOs are pipes that can be accessed like regular files.  FIFOs exist until they
are deleted (for example with `os.unlink`). Generally, FIFOs are used as
rendezvous between "client" and "server" type processes: the server opens the
FIFO for reading, and the client opens it for writing.  Note that `mkfifo`
doesn't open the FIFO --- it just creates the rendezvous point.

availability:: Unix, not WASI.

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
