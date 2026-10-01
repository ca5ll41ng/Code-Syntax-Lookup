---
id: "python-en-function-codecs-encodedfile"
language: "python"
lang: "en"
category: "function"
name: "EncodedFile"
signature: "EncodedFile(file, data_encoding, file_encoding=None, errors='strict')"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.EncodedFile"
license: "PSF"
updated: "2026-10-01"
---

# EncodedFile

Return a `StreamRecoder` instance, a wrapped version of *file*
which provides transparent transcoding. The original file is closed
when the wrapped version is closed.

Data written to the wrapped file is decoded according to the given
*data_encoding* and then written to the original file as bytes using
*file_encoding*. Bytes read from the original file are decoded
according to *file_encoding*, and the result is encoded
using *data_encoding*.

If *file_encoding* is not given, it defaults to *data_encoding*.

*errors* may be given to define the error handling. It defaults to
`'strict'`, which causes `ValueError` to be raised in case an encoding
error occurs.
