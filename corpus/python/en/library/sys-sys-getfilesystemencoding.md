---
id: "python-en-function-sys-getfilesystemencoding"
language: "python"
lang: "en"
category: "function"
name: "getfilesystemencoding"
signature: "getfilesystemencoding()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getfilesystemencoding"
license: "PSF"
updated: "2026-10-01"
---

# getfilesystemencoding

Get the `filesystem encoding`:
the encoding used with the `filesystem error handler` to convert between Unicode filenames and bytes
filenames. The filesystem error handler is returned from
`getfilesystemencodeerrors`.

For best compatibility, str should be used for filenames in all cases,
although representing filenames as bytes is also supported. Functions
accepting or returning filenames should support either str or bytes and
internally convert to the system's preferred representation.

`os.fsencode` and `os.fsdecode` should be used to ensure that
the correct encoding and errors mode are used.

The `filesystem encoding and error handler` are configured at Python
startup by the :c`PyConfig_Read` function: see
:c`~PyConfig.filesystem_encoding` and
:c`~PyConfig.filesystem_errors` members of :c`PyConfig`.

> *Changed in 3.2*: :func:`getfilesystemencoding` result cannot be ``None`` anymore.

> *Changed in 3.6*: Windows is no longer guaranteed to return ``'mbcs'``. See :pep:`529` for more information.

> *Changed in 3.7*: Return ``'utf-8'`` if the :ref:`Python UTF-8 Mode <utf8-mode>` is enabled.
