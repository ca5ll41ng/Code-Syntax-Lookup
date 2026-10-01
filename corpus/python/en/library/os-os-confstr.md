---
id: "python-en-function-os-confstr"
language: "python"
lang: "en"
category: "function"
name: "confstr"
signature: "confstr(name, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.confstr"
license: "PSF"
updated: "2026-10-01"
---

# confstr

Return string-valued system configuration values. *name* specifies the
configuration value to retrieve; it may be a string which is the name of a
defined system value; these names are specified in a number of standards (POSIX,
Unix 95, Unix 98, and others).  Some platforms define additional names as well.
The names known to the host operating system are given as the keys of the
`confstr_names` dictionary.  For configuration variables not included in that
mapping, passing an integer for *name* is also accepted.

If the configuration value specified by *name* isn't defined, `None` is
returned.

If *name* is a string and is not known, `ValueError` is raised.  If a
specific value for *name* is not supported by the host system, even if it is
included in `confstr_names`, an `OSError` is raised with
`errno.EINVAL` for the error number.

availability:: Unix.
