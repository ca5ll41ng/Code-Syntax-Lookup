---
id: "python-en-function-zlib-compressobj"
language: "python"
lang: "en"
category: "function"
name: "compressobj"
signature: "compressobj(level=Z_DEFAULT_COMPRESSION, method=DEFLATED, wbits=MAX_WBITS, memLevel=DEF_MEM_LEVEL, strategy=Z_DEFAULT_STRATEGY[, zdict])"
directive: "function"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.compressobj"
license: "PSF"
updated: "2026-10-01"
---

# compressobj

Returns a compression object, to be used for compressing data streams that won't
fit into memory at once.

*level* is the compression level -- an integer from `0` to `9` or `-1`.
See `Z_BEST_SPEED` (`1`), `Z_BEST_COMPRESSION` (`9`),
`Z_NO_COMPRESSION` (`0`), and the default,
`Z_DEFAULT_COMPRESSION` (`-1`) for more information about these values.

*method* is the compression algorithm. Currently, the only supported value is
`DEFLATED`.

The *wbits* parameter controls the size of the history buffer (or the
"window size"), and what header and trailer format will be used. It has
the same meaning as `described for compress() <#compress-wbits>`__.

The *memLevel* argument controls the amount of memory used for the
internal compression state. Valid values range from `1` to `9`.
Higher values use more memory, but are faster and produce smaller output.

*strategy* is used to tune the compression algorithm. Possible values are
`Z_DEFAULT_STRATEGY`, `Z_FILTERED`, `Z_HUFFMAN_ONLY`,
`Z_RLE` and `Z_FIXED`.

*zdict* is a predefined compression dictionary. This is a sequence of bytes
(such as a `bytes` object) containing subsequences that are expected
to occur frequently in the data that is to be compressed. Those subsequences
that are expected to be most common should come at the end of the dictionary.

> *Changed in 3.3*: Added the *zdict* parameter and keyword argument support.
