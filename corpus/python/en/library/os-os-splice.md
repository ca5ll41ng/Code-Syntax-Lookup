---
id: "python-en-function-os-splice"
language: "python"
lang: "en"
category: "function"
name: "splice"
signature: "splice(src, dst, count, offset_src=None, offset_dst=None, flags=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.splice"
license: "PSF"
updated: "2026-10-01"
---

# splice

Transfer *count* bytes from file descriptor *src*, starting from offset
*offset_src*, to file descriptor *dst*, starting from offset *offset_dst*.

The splicing behaviour can be modified by specifying a *flags* value.
Any of the following variables may used, combined using bitwise OR
(the `|` operator):

* If `SPLICE_F_MOVE` is specified,
  the kernel is asked to move pages instead of copying,
  but pages may still be copied if the kernel cannot move the pages from the pipe.

* If `SPLICE_F_NONBLOCK` is specified,
  the kernel is asked to not block on I/O.
  This makes the splice pipe operations nonblocking,
  but splice may nevertheless block because the spliced file descriptors may block.

* If `SPLICE_F_MORE` is specified,
  it hints to the kernel that more data will be coming in a subsequent splice.

At least one of the file descriptors must refer to a pipe. If *offset_src*
is `None`, then *src* is read from the current position; respectively for
*offset_dst*. The offset associated to the file descriptor that refers to a
pipe must be `None`. The files pointed to by *src* and *dst* must reside in
the same filesystem, otherwise an `OSError` is raised with
`~OSError.errno` set to `errno.EXDEV`.

This copy is done without the additional cost of transferring data
from the kernel to user space and then back into the kernel. Additionally,
some filesystems could implement extra optimizations. The copy is done as if
both files are opened as binary.

Upon successful completion, returns the number of bytes spliced to or from
the pipe. A return value of 0 means end of input. If *src* refers to a
pipe, then this means that there was no data to transfer, and it would not
make sense to block because there are no writers connected to the write end
of the pipe.

> **Seealso**
>
>

availability:: Linux >= 2.6.17 with glibc >= 2.5

> *Added in 3.10*
