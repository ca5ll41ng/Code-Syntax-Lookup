---
id: "python-en-function-os-setns"
language: "python"
lang: "en"
category: "function"
name: "setns"
signature: "setns(fd, nstype=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setns"
license: "PSF"
updated: "2026-10-01"
---

# setns

Reassociate the current thread with a Linux namespace.
See the `setns(2)` and `namespaces(7)` man pages for more
details.

If *fd* refers to a `/proc/{pid}/ns/` link, `setns()` reassociates the
calling thread with the namespace associated with that link,
and *nstype* may be set to one of the
`CLONE_NEW* constants`
to impose constraints on the operation
(`0` means no constraints).

Since Linux 5.8, *fd* may refer to a PID file descriptor obtained from
`~os.pidfd_open`. In this case, `setns()` reassociates the calling thread
into one or more of the same namespaces as the thread referred to by *fd*.
This is subject to any constraints imposed by *nstype*,
which is a bit mask combining one or more of the
`CLONE_NEW* constants`,
e.g. `setns(fd, os.CLONE_NEWUTS | os.CLONE_NEWPID)`.
The caller's memberships in unspecified namespaces are left unchanged.

*fd* can be any object with a `~io.IOBase.fileno` method, or a raw file descriptor.

This example reassociates the thread with the `init` process's network namespace::

   fd = os.open("/proc/1/ns/net", os.O_RDONLY)
   os.setns(fd, os.CLONE_NEWNET)
   os.close(fd)

availability:: Linux >= 3.0 with glibc >= 2.14.

> *Added in 3.12*

> **Seealso**
>
> The `~os.unshare` function.
>
