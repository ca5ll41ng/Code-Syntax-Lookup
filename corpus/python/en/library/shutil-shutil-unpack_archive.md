---
id: "python-en-function-shutil-unpack_archive"
language: "python"
lang: "en"
category: "function"
name: "unpack_archive"
signature: "unpack_archive(filename[, extract_dir[, format[, filter]]])"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.unpack_archive"
license: "PSF"
updated: "2026-10-01"
---

# unpack_archive

Unpack an archive. *filename* is the full path of the archive.

*extract_dir* is the name of the target directory where the archive is
unpacked. If not provided, the current working directory is used.

*format* is the archive format: one of "zip", "tar", "gztar", "bztar",
"xztar", or "zstdtar".  Or any other format registered with
`register_unpack_format`.  If not provided, `unpack_archive`
will use the archive file name extension and see if an unpacker was
registered for that extension.  In case none is found,
a `ValueError` is raised.

The keyword-only *filter* argument is passed to the underlying unpacking
function. For zip files, *filter* is not accepted.
For tar files, it is recommended to use `'data'` (default since Python
3.14), unless using features specific to tar and UNIX-like filesystems.
(See `tarfile-extraction-filter` for details.)

audit-event:: shutil.unpack_archive filename,extract_dir,format shutil.unpack_archive

> **Warning**
>
> Never extract archives from untrusted sources without prior inspection.
> It is possible that files are created outside of the path specified in
> the *extract_dir* argument, for example, members that have absolute filenames
> or filenames with ".." components.
>
> Since Python 3.14, the defaults for both built-in formats (zip and tar
> files) will prevent the most dangerous of such security issues,
> but will not prevent *all* unintended behavior.
> Read the `tarfile-further-verification`
> section for tar-specific details.
>

> *Changed in 3.7*: Accepts a :term:`path-like object` for *filename* and *extract_dir*.

> *Changed in 3.12*: Added the *filter* argument.
