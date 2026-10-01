---
id: "python-en-function-shutil-copyfile"
language: "python"
lang: "en"
category: "function"
name: "copyfile"
signature: "copyfile(src, dst, *, follow_symlinks=True)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.copyfile"
license: "PSF"
updated: "2026-10-01"
---

# copyfile

Copy the contents (no metadata) of the file named *src* to a file named
*dst* and return *dst* in the most efficient way possible.
*src* and *dst* are `path-like objects` or path names given as strings.

*dst* must be the complete target file name; look at `~shutil.copy`
for a copy that accepts a target directory path.  If *src* and *dst*
specify the same file, `SameFileError` is raised.

The destination location must be writable; otherwise, an `OSError`
exception will be raised. If *dst* already exists, it will be replaced.
Special files such as character or block devices, pipes, and sockets cannot
be copied with this function.

If *follow_symlinks* is false and *src* is a symbolic link,
a new symbolic link will be created instead of copying the
file *src* points to.

audit-event:: shutil.copyfile src,dst shutil.copyfile

> *Changed in 3.3*: :exc:`IOError` used to be raised instead of :exc:`OSError`. Added *follow_symlinks* argument. Now returns *dst*.

> *Changed in 3.4*: Raise :exc:`SameFileError` instead of :exc:`Error`.  Since the former is a subclass of the latter, this change is backward compatible.

> *Changed in 3.8*: Platform-specific fast-copy syscalls may be used internally in order to copy the file more efficiently. See :ref:`shutil-platform-dependent-efficient-copy-operations` section.

> *Changed in 3.15*: :exc:`SpecialFileError` is now also raised for sockets and device files.
