---
id: "python-en-function-tarfile-tarfile-gettarinfo"
language: "python"
lang: "en"
category: "function"
name: "TarFile.gettarinfo"
signature: "TarFile.gettarinfo(name=None, arcname=None, fileobj=None)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.gettarinfo"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.gettarinfo

Create a `TarInfo` object from the result of `os.stat` or
equivalent on an existing file.  The file is either named by *name*, or
specified as a `file object` *fileobj* with a file descriptor.
*name* may be a `path-like object`.  If
given, *arcname* specifies an alternative name for the file in the
archive, otherwise, the name is taken from *fileobj*’s
`~io.FileIO.name` attribute, or the *name* argument.  The name
should be a text string.

You can modify
some of the `TarInfo`’s attributes before you add it using `addfile`.
If the file object is not an ordinary file object positioned at the
beginning of the file, attributes such as `~TarInfo.size` may need
modifying.  This is the case for objects such as `~gzip.GzipFile`.
The `~TarInfo.name` may also be modified, in which case *arcname*
could be a dummy string.

> *Changed in 3.6*: The *name* parameter accepts a :term:`path-like object`.
