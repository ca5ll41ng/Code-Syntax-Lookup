---
id: "python-zh-function-os-urandom"
language: "python"
lang: "zh"
category: "function"
name: "urandom"
signature: "urandom(size, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.urandom"
license: "PSF"
updated: "2026-10-01"
---

# urandom

返回大小为 *size* 的字节串，它是适合加密使用的随机字节。

This function returns random bytes from an OS-specific randomness source.  The
returned data should be unpredictable enough for cryptographic applications,
though its exact quality depends on the OS implementation.

On Linux, if the `getrandom()` syscall is available, it is used in
blocking mode: block until the system urandom entropy pool is initialized
(128 bits of entropy are collected by the kernel). See the PEP 524 for
the rationale. On Linux, the `getrandom` function can be used to get
random bytes in non-blocking mode (using the `GRND_NONBLOCK` flag) or
to poll until the system urandom entropy pool is initialized.

On a Unix-like system, random bytes are read from the `/dev/urandom`
device. If the `/dev/urandom` device is not available or not readable, the
`NotImplementedError` exception is raised.

在 Windows 上，它将使用 ``BCryptGenRandom()``。

> **Seealso**
>
> The `secrets` module provides higher level functions. For an
> easy-to-use interface to the random number generator provided by your
> platform, please see `random.SystemRandom`.
>

> *Changed in 3.5*: On Linux 3.17 and newer, the ``getrandom()`` syscall is now used when available.  On OpenBSD 5.6 and newer, the C ``getentropy()`` function is now used. These functions avoid the usage of an internal file descriptor.

> *Changed in 3.5.2*: On Linux, if the ``getrandom()`` syscall blocks (the urandom entropy pool is not initialized yet), fall back on reading ``/dev/urandom``.

> *Changed in 3.6*: On Linux, ``getrandom()`` is now used in blocking mode to increase the security.

> *Changed in 3.11*: On Windows, ``BCryptGenRandom()`` is used instead of ``CryptGenRandom()`` which is deprecated.
