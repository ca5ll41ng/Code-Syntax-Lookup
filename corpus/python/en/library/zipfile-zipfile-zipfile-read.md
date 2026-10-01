---
id: "python-en-function-zipfile-zipfile-read"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.read"
signature: "ZipFile.read(name, pwd=None)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.read"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.read

Return the bytes of the file *name* in the archive.  *name* is the name of the
file in the archive, or a `ZipInfo` object.  The archive must be open for
read or append. *pwd* is the password used for encrypted files as a `bytes`
object and, if specified, overrides the default password set with `setpassword`.
Calling `read` on a ZipFile that uses a compression method other than
`ZIP_STORED`, `ZIP_DEFLATED`, `ZIP_BZIP2`,
`ZIP_LZMA`, or `ZIP_ZSTANDARD` will raise a
`NotImplementedError`. An error will also be raised if the
corresponding compression module is not available.

> *Changed in 3.6*: Calling :meth:`read` on a closed ZipFile will raise a :exc:`ValueError`. Previously, a :exc:`RuntimeError` was raised.
