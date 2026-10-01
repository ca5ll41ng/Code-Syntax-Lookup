---
id: "python-zh-function-zipfile-strict_timestamps-true"
language: "python"
lang: "zh"
category: "function"
name: "strict_timestamps=True)"
directive: "classmethod"
module: "zipfile"
source_url: "https://docs.python.org/zh-cn/3/library/zipfile.html#zipfile.strict_timestamps=True)"
license: "PSF"
updated: "2026-10-01"
---

# strict_timestamps=True)

Construct a `ZipInfo` instance for a file on the filesystem, in
preparation for adding it to a zip file.

*filename* 应为文件系统中某个文件或目录的路径。

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
