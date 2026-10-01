---
id: "python-en-function-tarfile-tarfile-extract"
language: "python"
lang: "en"
category: "function"
name: "TarFile.extract"
signature: "TarFile.extract(member, path=\"\", set_attrs=True, *, numeric_owner=False, filter=None)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.extract"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.extract

Extract a member from the archive to the current working directory, using its
full name. Its file information is extracted as accurately as possible. *member*
may be a filename or a `TarInfo` object. You can specify a different
directory using *path*. *path* may be a `path-like object`.
File attributes (owner, mtime, mode) are set unless *set_attrs* is false.

The *numeric_owner* and *filter* arguments are the same as
for `extractall`.

> **Note**
>
> The `extract` method does not take care of several extraction issues.
> In most cases you should consider using the `extractall` method.
>

> **Warning**
>
> Never extract archives from untrusted sources without prior inspection.
> See the warning for `extractall` for details.
>

> *Changed in 3.2*: Added the *set_attrs* parameter.

> *Changed in 3.5*: Added the *numeric_owner* parameter.

> *Changed in 3.6*: The *path* parameter accepts a :term:`path-like object`.

> *Changed in 3.12*: Added the *filter* parameter.
