---
id: "python-en-function-shutil-move"
language: "python"
lang: "en"
category: "function"
name: "move"
signature: "move(src, dst, copy_function=copy2)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.move"
license: "PSF"
updated: "2026-10-01"
---

# move

Recursively move a file or directory (*src*) to another location and return
the destination.

If *dst* is an existing directory or a symlink to a directory, then *src*
is moved inside that directory. The destination path in that directory must
not already exist.

If *dst* already exists but is not a directory, it may be overwritten
depending on `os.rename` semantics.

`os.rename` is preferably used internally when *src* and the destination are on
the same filesystem. In case `os.rename` fails due to `OSError`
(e.g. the user has write permission to the destination file but not to its parent
directory), this method falls back to using *copy_function*, in which case
*src* is copied to the destination using *copy_function* and then removed.

In case of symlinks, a new symlink pointing to the target of *src* will be
created in or as the destination, and *src* will be removed.

If *copy_function* is given, it must be a callable that takes two arguments,
*src* and the destination, and will be used to copy *src* to the destination
if `os.rename` cannot be used.  If the source is a directory,
`copytree` is called, passing it the *copy_function*. The
default *copy_function* is `copy2`.  Using `~shutil.copy` as the
*copy_function* allows the move to succeed when it is not possible to also
copy the metadata, at the expense of not copying any of the metadata.

audit-event:: shutil.move src,dst shutil.move

> *Changed in 3.3*: Added explicit symlink handling for foreign filesystems, thus adapting it to the behavior of GNU's :program:`mv`. Now returns *dst*.

> *Changed in 3.5*: Added the *copy_function* keyword argument.

> *Changed in 3.8*: Platform-specific fast-copy syscalls may be used internally in order to copy the file more efficiently. See :ref:`shutil-platform-dependent-efficient-copy-operations` section.

> *Changed in 3.9*: Accepts a :term:`path-like object` for both *src* and *dst*.
