---
id: "python-en-function-os-statx"
language: "python"
lang: "en"
category: "function"
name: "statx"
signature: "statx(path, mask, *, flags=0, dir_fd=None, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.statx"
license: "PSF"
updated: "2026-10-01"
---

# statx

Get the status of a file or file descriptor by performing a :c`statx`
system call on the given path.

*path* is a `path-like object` or an open file descriptor. *mask* is a
combination of the module-level `STATX_*` constants
specifying the information to retrieve. *flags* is a combination of the
module-level `AT_STATX_*` constants and/or
`AT_NO_AUTOMOUNT`. Returns a `statx_result` object whose
`~os.statx_result.stx_mask` attribute specifies the information
actually retrieved (which may differ from *mask*).

This function supports `specifying a file descriptor`,
`paths relative to directory descriptors`, and
`not following symlinks`.

> **Seealso**
>
>

availability:: Linux >= 4.11 with glibc >= 2.28.

> *Added in 3.15*
