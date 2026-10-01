---
id: "python-en-function-shutil-copy2"
language: "python"
lang: "en"
category: "function"
name: "copy2"
signature: "copy2(src, dst, *, follow_symlinks=True)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.copy2"
license: "PSF"
updated: "2026-10-01"
---

# copy2

Identical to `~shutil.copy` except that `copy2`
also attempts to preserve file metadata.

When *follow_symlinks* is false, and *src* is a symbolic
link, `copy2` attempts to copy all metadata from the
*src* symbolic link to the newly created *dst* symbolic link.
However, this functionality is not available on all platforms.
On platforms where some or all of this functionality is
unavailable, `copy2` will preserve all the metadata
it can; `copy2` never raises an exception because it
cannot preserve file metadata.

`copy2` uses `copystat` to copy the file metadata.
Please see `copystat` for more information
about platform support for modifying symbolic link metadata.

audit-event:: shutil.copyfile src,dst shutil.copy2

audit-event:: shutil.copystat src,dst shutil.copy2

> *Changed in 3.3*: Added *follow_symlinks* argument, try to copy extended file system attributes too (currently Linux only). Now returns path to the newly created file.

> *Changed in 3.8*: Platform-specific fast-copy syscalls may be used internally in order to copy the file more efficiently. See :ref:`shutil-platform-dependent-efficient-copy-operations` section.
