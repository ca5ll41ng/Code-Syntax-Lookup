---
id: "python-zh-function-os-utime"
language: "python"
lang: "zh"
category: "function"
name: "utime"
signature: "utime(path, times=None, *[, ns], dir_fd=None, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.utime"
license: "PSF"
updated: "2026-10-01"
---

# utime

设置文件 *path* 的访问时间和修改时间。

`utime` takes two optional parameters, *times* and *ns*.
These specify the times set on *path* and are used as follows:

- If *ns* is specified,
  it must be a 2-tuple of the form `(atime_ns, mtime_ns)`
  where each member is an int expressing nanoseconds.
- If *times* is not `None`,
  it must be a 2-tuple of the form `(atime, mtime)`
  where each member is a real number expressing seconds,
  rounded down to nanoseconds.
- If *times* is `None` and *ns* is unspecified,
  this is equivalent to specifying `ns=(atime_ns, mtime_ns)`
  where both times are the current time.

同时为 *times* 和 *ns* 指定元组会出错。

Note that the exact times you set here may not be returned by a subsequent
`~os.stat` call, depending on the resolution with which your operating
system records access and modification times; see `~os.stat`. The best
way to preserve exact times is to use the *st_atime_ns* and *st_mtime_ns*
fields from the `os.stat` result object with the *ns* parameter to
`utime`.

This function can support `specifying a file descriptor`,
`paths relative to directory descriptors` and `not
following symlinks`.

audit-event:: os.utime path,times,ns,dir_fd os.utime

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor, and the *dir_fd*, *follow_symlinks*, and *ns* parameters.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.15*: Accepts any real numbers as *times*, not only integers or floats.
