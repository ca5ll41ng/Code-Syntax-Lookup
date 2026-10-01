---
id: "python-en-function-zlib-decompress-decompress"
language: "python"
lang: "en"
category: "function"
name: "Decompress.decompress"
signature: "Decompress.decompress(data, /, max_length=0)"
directive: "method"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.Decompress.decompress"
license: "PSF"
updated: "2026-10-01"
---

# Decompress.decompress

Decompress *data*, returning a bytes object containing the uncompressed data
corresponding to at least part of the data in *string*.  This data should be
concatenated to the output produced by any preceding calls to the
`decompress` method.  Some of the input data may be preserved in internal
buffers for later processing.

If the optional parameter *max_length* is non-zero then the return value will be
no longer than *max_length*. This may mean that not all of the compressed input
can be processed; and unconsumed data will be stored in the attribute
`unconsumed_tail`. This bytestring must be passed to a subsequent call to
`decompress` if decompression is to continue.  If *max_length* is zero
then the whole input is decompressed, and `unconsumed_tail` is empty.
For example, the full content could be read like::

  process_output(d.decompress(data, max_length))
  while chunk := d.decompress(d.unconsumed_tail, max_length):
      process_output(chunk)

> *Changed in 3.6*: *max_length* can be used as a keyword argument.
