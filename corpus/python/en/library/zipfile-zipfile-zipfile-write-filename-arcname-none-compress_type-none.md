---
id: "python-en-function-zipfile-zipfile-write-filename-arcname-none-compress_type-none"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.write(filename, arcname=None, compress_type=None, \\"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.write(filename, arcname=None, compress_type=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.write(filename, arcname=None, compress_type=None, \

Write the file named *filename* to the archive, giving it the archive name
*arcname* (by default, this will be the same as *filename*, but without a drive
letter and with leading path separators removed).  If given, *compress_type*
overrides the value given for the *compression* parameter to the constructor for
the new entry. Similarly, *compresslevel* will override the constructor if
given.
The archive must be open with mode `'w'`, `'x'` or `'a'`.

> **Note**
>
> The ZIP file standard historically did not specify a metadata encoding,
> but strongly recommended CP437 (the original IBM PC encoding) for
> interoperability.  Recent versions allow use of UTF-8 (only).  In this
> module, UTF-8 will automatically be used to write the member names if
> they contain any non-ASCII characters.  It is not possible to write
> member names in any encoding other than ASCII or UTF-8.
>

> **Note**
>
> Archive names should be relative to the archive root, that is, they should not
> start with a path separator.
>

> **Note**
>
> If `arcname` (or `filename`, if `arcname` is  not given) contains a null
> byte, the name of the file in the archive will be truncated at the null byte.
>

> **Note**
>
> A leading slash in the filename may lead to the archive being impossible to
> open in some zip programs on Windows systems.
>

> *Changed in 3.6*: Calling :meth:`write` on a ZipFile created with mode ``'r'`` or a closed ZipFile will raise a :exc:`ValueError`.  Previously, a :exc:`RuntimeError` was raised.
