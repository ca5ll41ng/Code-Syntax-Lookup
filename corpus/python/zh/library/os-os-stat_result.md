---
id: "python-zh-function-os-stat_result"
language: "python"
lang: "zh"
category: "function"
name: "stat_result"
directive: "class"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.stat_result"
license: "PSF"
updated: "2026-10-01"
---

# stat_result

Object whose attributes correspond roughly to the members of the
:c`stat` structure. It is used for the result of `os.stat`,
`os.fstat` and `os.lstat`.

属性：

attribute:: st_mode

attribute:: st_ino

attribute:: st_dev

attribute:: st_nlink

attribute:: st_uid

attribute:: st_gid

attribute:: st_size

时间戳：

attribute:: st_atime

attribute:: st_mtime

attribute:: st_ctime

attribute:: st_atime_ns

attribute:: st_mtime_ns

attribute:: st_ctime_ns

attribute:: st_birthtime

attribute:: st_birthtime_ns

> **Note**
>
> The exact meaning and resolution of the `st_atime`,
> `st_mtime`, `st_ctime` and `st_birthtime` attributes
> depend on the operating system and the file system. For example, on
> Windows systems using the FAT32 file systems, `st_mtime` has
> 2-second resolution, and `st_atime` has only 1-day resolution.
> See your operating system documentation for details.
>
> Similarly, although `st_atime_ns`, `st_mtime_ns`,
> `st_ctime_ns` and `st_birthtime_ns` are always expressed in
> nanoseconds, many systems do not provide nanosecond precision.  On
> systems that do provide nanosecond precision, the floating-point object
> used to store `st_atime`, `st_mtime`, `st_ctime` and
> `st_birthtime` cannot preserve all of it, and as such will be
> slightly inexact. If you need the exact timestamps you should always use
> `st_atime_ns`, `st_mtime_ns`, `st_ctime_ns` and
> `st_birthtime_ns`.
>

On some Unix systems (such as Linux), the following attributes may also be
available:

attribute:: st_blocks

attribute:: st_blksize

attribute:: st_rdev

attribute:: st_flags

On other Unix systems (such as FreeBSD), the following attributes may be
available (but may be only filled out if root tries to use them):

attribute:: st_gen

On Solaris and derivatives, the following attributes may also be
available:

attribute:: st_fstype

在 macOS 系统上，以下属性可能也可用：

attribute:: st_rsize

attribute:: st_creator

attribute:: st_type

在 Windows 系统上，以下属性也可用：

attribute:: st_file_attributes

attribute:: st_reparse_tag

The standard module `stat` defines functions and constants that are
useful for extracting information from a :c`stat` structure. (On
Windows, some items are filled with dummy values.)

For backward compatibility, a `stat_result` instance is also
accessible as a tuple of at least 10 integers giving the most important (and
portable) members of the :c`stat` structure, in the order
`st_mode`, `st_ino`, `st_dev`, `st_nlink`,
`st_uid`, `st_gid`, `st_size`, `st_atime`,
`st_mtime`, `st_ctime`. More items may be added at the end by
some implementations. For compatibility with older Python versions,
accessing `stat_result` as a tuple always returns integers.

> *Changed in 3.5*: Windows now returns the file index as :attr:`st_ino` when available.

> *Changed in 3.7*: Added the :attr:`st_fstype` member to Solaris/derivatives.

> *Changed in 3.8*: Added the :attr:`st_reparse_tag` member on Windows.

> *Changed in 3.8*: On Windows, the :attr:`st_mode` member now identifies special files as :const:`~stat.S_IFCHR`, :const:`~stat.S_IFIFO` or :const:`~stat.S_IFBLK` as appropriate.

> *Changed in 3.12*: On Windows, :attr:`st_ctime` is deprecated. Eventually, it will contain the last metadata change time, for consistency with other platforms, but for now still contains creation time. Use :attr:`st_birthtime` for the creation time.  On Windows, :attr:`st_ino` may now be up to 128 bits, depending on the file system. Previously it would not be above 64 bits, and larger file identifiers would be arbitrarily packed.  On Windows, :attr:`st_rdev` no longer returns a value. Previously it would contain the same as :attr:`st_dev`, which was incorrect.  Added the :attr:`st_birthtime` member on Windows.
