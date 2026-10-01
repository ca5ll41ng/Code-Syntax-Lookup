---
id: "python-en-function-os-chmod"
language: "python"
lang: "en"
category: "function"
name: "chmod"
signature: "chmod(path, mode, *, dir_fd=None, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.chmod"
license: "PSF"
updated: "2026-10-01"
---

# chmod

Change the mode of *path* to the numeric *mode*. *mode* may take one of the
following values (as defined in the `stat` module) or bitwise ORed
combinations of them:

* `stat.S_ISUID`
* `stat.S_ISGID`
* `stat.S_ENFMT`
* `stat.S_ISVTX`
* `stat.S_IREAD`
* `stat.S_IWRITE`
* `stat.S_IEXEC`
* `stat.S_IRWXU`
* `stat.S_IRUSR`
* `stat.S_IWUSR`
* `stat.S_IXUSR`
* `stat.S_IRWXG`
* `stat.S_IRGRP`
* `stat.S_IWGRP`
* `stat.S_IXGRP`
* `stat.S_IRWXO`
* `stat.S_IROTH`
* `stat.S_IWOTH`
* `stat.S_IXOTH`

This function can support `specifying a file descriptor`,
`paths relative to directory descriptors` and `not
following symlinks`.

> **Note**
>
> Although Windows supports `chmod`, you can only set the file's
> read-only flag with it (via the `stat.S_IWRITE` and `stat.S_IREAD`
> constants or a corresponding integer value).  All other bits are ignored.
> The default value of *follow_symlinks* is `False` on Windows.
>
> The function is limited on WASI, see `wasm-availability` for more
> information.
>

audit-event:: os.chmod path,mode,dir_fd os.chmod

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor, and the *dir_fd* and *follow_symlinks* arguments.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.13*: Added support for a file descriptor and the *follow_symlinks* argument on Windows.
