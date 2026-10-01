---
id: "python-en-function-sys-getfilesystemencodeerrors"
language: "python"
lang: "en"
category: "function"
name: "getfilesystemencodeerrors"
signature: "getfilesystemencodeerrors()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getfilesystemencodeerrors"
license: "PSF"
updated: "2026-10-01"
---

# getfilesystemencodeerrors

Get the `filesystem error handler`: the error handler used with the `filesystem encoding` to convert between Unicode
filenames and bytes filenames. The filesystem encoding is returned from
`getfilesystemencoding`.

`os.fsencode` and `os.fsdecode` should be used to ensure that
the correct encoding and errors mode are used.

The `filesystem encoding and error handler` are configured at Python
startup by the :c`PyConfig_Read` function: see
:c`~PyConfig.filesystem_encoding` and
:c`~PyConfig.filesystem_errors` members of :c`PyConfig`.

> *Added in 3.6*
