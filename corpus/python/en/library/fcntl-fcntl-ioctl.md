---
id: "python-en-function-fcntl-ioctl"
language: "python"
lang: "en"
category: "function"
name: "ioctl"
signature: "ioctl(fd, request, arg=0, mutate_flag=True, /)"
directive: "function"
module: "fcntl"
source_url: "https://docs.python.org/3/library/fcntl.html#fcntl.ioctl"
license: "PSF"
updated: "2026-10-01"
---

# ioctl

This function is identical to the `~fcntl.fcntl` function, except
that the argument handling is even more complicated.

The *request* parameter is limited to values that can fit in 32-bits
or 64-bits, depending on the platform.
Additional constants of interest for use as the *request* argument can be
found in the `termios` module, under the same names as used in
the relevant C header files.

The parameter *arg* can be an integer, a `bytes-like object`,
or a string.
The type and size of *arg* must match the type and size of
the argument of the operation as specified in the relevant C documentation.

If *arg* does not support the read-write buffer interface or
the *mutate_flag* is false, behavior is as for the `~fcntl.fcntl`
function.

If *arg* supports the read-write buffer interface (like `bytearray`)
and *mutate_flag* is true (the default), then the buffer is (in effect) passed
to the underlying :c`ioctl` system call, the latter's return code is
passed back to the calling Python, and the buffer's new contents reflect the
action of the :c`ioctl`.  This is a slight simplification, because if the
supplied buffer is less than 1024 bytes long it is first copied into a static
buffer 1024 bytes long which is then passed to `ioctl` and copied back
into the supplied buffer.

If the :c`ioctl` call fails, an `OSError` exception is raised.

> **Note**
>
> If the type or size of *arg* does not match the type or size
> of the operation's argument (for example, if an integer is
> passed when a pointer is expected, or the information returned in
> the buffer by the operating system is larger than the size of *arg*),
> this is most likely to result in a segmentation violation or
> a more subtle data corruption.
>

An example::

   >>> import array, fcntl, struct, termios, os
   >>> os.getpgrp()
   13341
   >>> struct.unpack('h', fcntl.ioctl(0, termios.TIOCGPGRP, "  "))[0]
   13341
   >>> buf = array.array('h', [0])
   >>> fcntl.ioctl(0, termios.TIOCGPGRP, buf, 1)
   0
   >>> buf
   array('h', [13341])

audit-event:: fcntl.ioctl fd,request,arg fcntl.ioctl

> *Changed in 3.14*: The GIL is always released during a system call. System calls failing with EINTR are automatically retried.

> *Changed in 3.15*: The size of not mutated bytes-like objects is no longer limited to 1024 bytes.
