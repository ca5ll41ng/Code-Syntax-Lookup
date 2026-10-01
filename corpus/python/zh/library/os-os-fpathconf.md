---
id: "python-zh-function-os-fpathconf"
language: "python"
lang: "zh"
category: "function"
name: "fpathconf"
signature: "fpathconf(fd, name, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.fpathconf"
license: "PSF"
updated: "2026-10-01"
---

# fpathconf

Return system configuration information relevant to an open file. *name*
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

从 Python 3.3 起，此功能等价于 ``os.pathconf(fd, name)``。

availability:: Unix.
