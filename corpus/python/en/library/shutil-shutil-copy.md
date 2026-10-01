---
id: "python-en-function-shutil-copy"
language: "python"
lang: "en"
category: "function"
name: "copy"
signature: "copy(src, dst, *, follow_symlinks=True)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.copy"
license: "PSF"
updated: "2026-10-01"
---

# copy

Copies the file *src* to the file or directory *dst*.  *src* and *dst*
should be `path-like objects` or strings.  If
*dst* specifies a directory, the file will be copied into *dst* using the
base filename from *src*. If *dst* specifies a file that already exists,
it will be replaced. Returns the path to the newly created file.

If *follow_symlinks* is false, and *src* is a symbolic link,
*dst* will be created as a symbolic link.  If *follow_symlinks*
is true and *src* is a symbolic link, *dst* will be a copy of
the file *src* refers to.

`~shutil.copy` copies the file data and the file's permission
mode (see `os.chmod`).  Other metadata, like the
file's creation and modification times, is not preserved.
To preserve all file metadata from the original, use
`~shutil.copy2` instead.

audit-event:: shutil.copyfile src,dst shutil.copy

audit-event:: shutil.copymode src,dst shutil.copy

> *Changed in 3.3*: Added *follow_symlinks* argument. Now returns path to the newly created file.

> *Changed in 3.8*: Platform-specific fast-copy syscalls may be used internally in order to copy the file more efficiently. See :ref:`shutil-platform-dependent-efficient-copy-operations` section.
