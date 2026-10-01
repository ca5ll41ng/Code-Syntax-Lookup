---
id: "python-en-function-pathlib-parent_mode-none"
language: "python"
lang: "en"
category: "function"
name: "parent_mode=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.parent_mode=None)"
license: "PSF"
updated: "2026-10-01"
---

# parent_mode=None)

Create a new directory at this given path.  If *mode* is given, it is
combined with the process's `umask` value to determine the file mode
and access flags.  If the path already exists, `FileExistsError`
is raised.

If *parents* is true, any missing parents of this path are created
as needed; they are created with the default permissions without taking
*mode* into account (mimicking the POSIX `mkdir -p` command).

If *parent_mode* is not `None`, it is used as the mode for any
newly-created, intermediate-level directories when *parents* is true.
Like *mode*, it is combined with the process's `umask` value.
Otherwise, intermediate directories are created with the default
permissions (also subject to the umask).

If *parents* is false (the default), a missing parent raises
`FileNotFoundError`.

If *exist_ok* is false (the default), `FileExistsError` is
raised if the target directory already exists.

If *exist_ok* is true, `FileExistsError` will not be raised unless the given
path already exists in the file system and is not a directory (same
behavior as the POSIX `mkdir -p` command).

> *Changed in 3.5*: The *exist_ok* parameter was added.

> *Added in 3.15*: The *parent_mode* parameter.
