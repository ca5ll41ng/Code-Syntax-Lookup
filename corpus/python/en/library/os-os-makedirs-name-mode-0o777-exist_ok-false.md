---
id: "python-en-function-os-makedirs-name-mode-0o777-exist_ok-false"
language: "python"
lang: "en"
category: "function"
name: "makedirs(name, mode=0o777, exist_ok=False, *, \\"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.makedirs(name, mode=0o777, exist_ok=False, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# makedirs(name, mode=0o777, exist_ok=False, *, \

Recursive directory creation function.  Like `mkdir`, but makes all
intermediate-level directories needed to contain the leaf directory.

The *mode* parameter is passed to `mkdir` for creating the leaf
directory; see `the mkdir() description` for how it
is interpreted.  To set the file permission bits of any newly created parent
directories you can set the umask before invoking `makedirs`.  The
file permission bits of existing parent directories are not changed.

If *exist_ok* is `False` (the default), a `FileExistsError` is
raised if the target directory already exists.

If *parent_mode* is not `None`, it is used as the mode for any
newly-created, intermediate-level directories.  Like *mode*, it is
combined with the process's umask value; see `the mkdir()
description`.  Otherwise, intermediate directories are
created with the default mode, which is also subject to the umask.

> **Note**
>
> `makedirs` will become confused if the path elements to create
> include `pardir` (eg. ".." on UNIX systems).
>

This function handles UNC paths correctly.

audit-event:: os.mkdir path,mode,dir_fd os.makedirs

> *Changed in 3.2*: Added the *exist_ok* parameter.

> *Changed in 3.4.1*: Before Python 3.4.1, if *exist_ok* was ``True`` and the directory existed, :func:`makedirs` would still raise an error if *mode* did not match the mode of the existing directory. Since this behavior was impossible to implement safely, it was removed in Python 3.4.1. See :issue:`21082`.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.7*: The *mode* argument no longer affects the file permission bits of newly created intermediate-level directories.

> *Added in 3.15*: The *parent_mode* parameter. To match the behavior from Python 3.6 and earlier (where *mode* was applied to all created directories), pass ``parent_mode=mode``.
