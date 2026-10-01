---
id: "python-en-function-os-pathconf"
language: "python"
lang: "en"
category: "function"
name: "pathconf"
signature: "pathconf(path, name)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pathconf"
license: "PSF"
updated: "2026-10-01"
---

# pathconf

Return system configuration information relevant to a named file. *name*
specifies the configuration value to retrieve; it may be a string which is the
name of a defined system value; these names are specified in a number of
standards (POSIX.1, Unix 95, Unix 98, and others).  Some platforms define
additional names as well.  The names known to the host operating system are
given in the `pathconf_names` dictionary.  For configuration variables not
included in that mapping, passing an integer for *name* is also accepted.

If *name* is a string and is not known, `ValueError` is raised.  If a
specific value for *name* is not supported by the host system, even if it is
included in `pathconf_names`, an `OSError` is raised with
`errno.EINVAL` for the error number.

This function can support `specifying a file descriptor`.

availability:: Unix.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
