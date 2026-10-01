---
id: "python-en-function-tarfile-tarfile-extractall"
language: "python"
lang: "en"
category: "function"
name: "TarFile.extractall"
signature: "TarFile.extractall(path=\".\", members=None, *, numeric_owner=False, filter=None)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.extractall"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.extractall

Extract all members from the archive to the current working directory or
directory *path*. If optional *members* is given, it must be a subset of the
list returned by `getmembers`. Directory information like owner,
modification time and permissions are set after all members have been extracted.
This is done to work around two problems: A directory's modification time is
reset each time a file is created in it. And, if a directory's permissions do
not allow writing, extracting files to it will fail.

If *numeric_owner* is `True`, the uid and gid numbers from the tarfile
are used to set the owner/group for the extracted files. Otherwise, the named
values from the tarfile are used.

The *filter* argument specifies how `members` are modified or rejected
before extraction.
See `tarfile-extraction-filter` for details.
It is recommended to set this explicitly only if specific *tar* features
are required, or as `filter='data'` to support Python versions with a less
secure default (3.13 and lower).

> **Warning**
>
> Never extract archives from untrusted sources without prior inspection.
>
> Since Python 3.14, the default (`data`) will prevent
> the most dangerous security issues.
> However, it will not prevent *all* unintended or insecure behavior.
> Read the `tarfile-extraction-filter` section for details.
>

> *Changed in 3.5*: Added the *numeric_owner* parameter.

> *Changed in 3.6*: The *path* parameter accepts a :term:`path-like object`.

> *Changed in 3.12*: Added the *filter* parameter.

> *Changed in 3.14*: The *filter* parameter now defaults to ``'data'``.
