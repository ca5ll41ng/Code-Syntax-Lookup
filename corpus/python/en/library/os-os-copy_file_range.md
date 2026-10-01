---
id: "python-en-function-os-copy_file_range"
language: "python"
lang: "en"
category: "function"
name: "copy_file_range"
signature: "copy_file_range(src, dst, count, offset_src=None, offset_dst=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.copy_file_range"
license: "PSF"
updated: "2026-10-01"
---

# copy_file_range

Copy *count* bytes from file descriptor *src*, starting from offset
*offset_src*, to file descriptor *dst*, starting from offset *offset_dst*.
If *offset_src* is `None`, then *src* is read from the current position;
respectively for *offset_dst*.

In Linux kernel older than 5.3, the files pointed to by *src* and *dst*
must reside in the same filesystem, otherwise an `OSError` is
raised with `~OSError.errno` set to `errno.EXDEV`.

This copy is done without the additional cost of transferring data
from the kernel to user space and then back into the kernel. Additionally,
some filesystems could implement extra optimizations, such as the use of
reflinks (i.e., two or more inodes that share pointers to the same
copy-on-write disk blocks; supported file systems include btrfs and XFS)
and server-side copy (in the case of NFS).

The function copies bytes between two file descriptors. Text options, like
the encoding and the line ending, are ignored.

The return value is the amount of bytes copied. This could be less than the
amount requested.

> **Note**
>
> On Linux, `os.copy_file_range` should not be used for copying a
> range of a pseudo file from a special filesystem like procfs and sysfs.
> It will always copy no bytes and return 0 as if the file was empty
> because of a known Linux kernel issue.
>

availability:: Linux >= 4.5.

> *Added in 3.8*

> *Changed in 3.16*: The function is now also available when Python is built against a libc that lacks ``copy_file_range()``, such as glibc older than 2.27.
