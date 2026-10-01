---
id: "python-en-function-shutil-get_archive_formats"
language: "python"
lang: "en"
category: "function"
name: "get_archive_formats"
signature: "get_archive_formats()"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.get_archive_formats"
license: "PSF"
updated: "2026-10-01"
---

# get_archive_formats

Return a list of supported formats for archiving.
Each element of the returned sequence is a tuple `(name, description)`.

By default `shutil` provides these formats:

- *zip*: ZIP file (if the `zlib` module is available).
- *tar*: Uncompressed tar file. Uses POSIX.1-2001 pax format for new archives.
- *gztar*: gzip'ed tar-file (if the `zlib` module is available).
- *bztar*: bzip2'ed tar-file (if the `bz2` module is available).
- *xztar*: xz'ed tar-file (if the `lzma` module is available).
- *zstdtar*: Zstandard compressed tar-file (if the `compression.zstd`
  module is available).

You can register new formats or provide your own archiver for any existing
formats, by using `register_archive_format`.
