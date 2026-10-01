---
id: "python-en-function-shutil-copymode"
language: "python"
lang: "en"
category: "function"
name: "copymode"
signature: "copymode(src, dst, *, follow_symlinks=True)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.copymode"
license: "PSF"
updated: "2026-10-01"
---

# copymode

Copy the permission bits from *src* to *dst*.  The file contents, owner, and
group are unaffected.  *src* and *dst* are `path-like objects` or path names
given as strings.
If *follow_symlinks* is false, and both *src* and *dst* are symbolic links,
`copymode` will attempt to modify the mode of *dst* itself (rather
than the file it points to).  This functionality is not available on every
platform; please see `copystat` for more information.  If
`copymode` cannot modify symbolic links on the local platform, and it
is asked to do so, it will do nothing and return.

audit-event:: shutil.copymode src,dst shutil.copymode

> *Changed in 3.3*: Added *follow_symlinks* argument.
