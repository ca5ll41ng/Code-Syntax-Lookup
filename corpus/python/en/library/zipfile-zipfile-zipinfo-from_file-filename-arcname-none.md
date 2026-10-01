---
id: "python-en-function-zipfile-zipinfo-from_file-filename-arcname-none"
language: "python"
lang: "en"
category: "function"
name: "ZipInfo.from_file(filename, arcname=None, *, \\"
directive: "classmethod"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipInfo.from_file(filename, arcname=None, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# ZipInfo.from_file(filename, arcname=None, *, \

Construct a `ZipInfo` instance for a file on the filesystem, in
preparation for adding it to a zip file.

*filename* should be the path to a file or directory on the filesystem.

If *arcname* is specified, it is used as the name within the archive.
If *arcname* is not specified, the name will be the same as *filename*, but
with any drive letter and leading path separators removed.

The *strict_timestamps* argument, when set to `False`, allows to
zip files older than 1980-01-01 at the cost of setting the
timestamp to 1980-01-01.
Similar behavior occurs with files newer than 2107-12-31,
the timestamp is also set to the limit.

> *Added in 3.6*

> *Changed in 3.6.2*: The *filename* parameter accepts a :term:`path-like object`.

> *Changed in 3.8*: Added the *strict_timestamps* keyword-only parameter.
