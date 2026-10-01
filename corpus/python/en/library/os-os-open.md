---
id: "python-en-function-os-open"
language: "python"
lang: "en"
category: "function"
name: "open"
signature: "open(path, flags, mode=0o777, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.open"
license: "PSF"
updated: "2026-10-01"
---

# open

Open the file *path* and set various flags according to *flags* and possibly
its mode according to *mode*.  When computing *mode*, the current umask value
is first masked out.  Return the file descriptor for the newly opened file.
The new file descriptor is `non-inheritable`.

For a description of the flag and mode values, see the C run-time documentation;
flag constants (like `O_RDONLY` and `O_WRONLY`) are defined in
the `os` module.  In particular, on Windows adding
`O_BINARY` is needed to open files in binary mode.

This function can support `paths relative to directory descriptors` with the *dir_fd* parameter.

audit-event:: open path,mode,flags os.open

> *Changed in 3.4*: The new file descriptor is now non-inheritable.

> **Note**
>
> This function is intended for low-level I/O.  For normal usage, use the
> built-in function `open`, which returns a `file object` with
> `~io.BufferedIOBase.read` and `~io.BufferedIOBase.write` methods.
> To wrap a file descriptor in a file object, use `fdopen`.
>

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.5*: If the system call is interrupted and the signal handler does not raise an exception, the function now retries the system call instead of raising an :exc:`InterruptedError` exception (see :pep:`475` for the rationale).

> *Changed in 3.6*: Accepts a :term:`path-like object`.
