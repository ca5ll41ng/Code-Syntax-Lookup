---
id: "python-en-function-shutil-get_unpack_formats"
language: "python"
lang: "en"
category: "function"
name: "get_unpack_formats"
signature: "get_unpack_formats()"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.get_unpack_formats"
license: "PSF"
updated: "2026-10-01"
---

# get_unpack_formats

Return a list of all registered formats for unpacking.
Each element of the returned sequence is a tuple
`(name, extensions, description)`.

By default `shutil` provides these formats:

- *zip*: ZIP file (unpacking compressed files works only if the corresponding
  module is available).
- *tar*: uncompressed tar file.
- *gztar*: gzip'ed tar-file (if the `zlib` module is available).
- *bztar*: bzip2'ed tar-file (if the `bz2` module is available).
- *xztar*: xz'ed tar-file (if the `lzma` module is available).
- *zstdtar*: Zstandard compressed tar-file (if the `compression.zstd`
  module is available).

You can register new formats or provide your own unpacker for any existing
formats, by using `register_unpack_format`.
