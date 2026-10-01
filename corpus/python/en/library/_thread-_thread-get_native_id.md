---
id: "python-en-function-_thread-get_native_id"
language: "python"
lang: "en"
category: "function"
name: "get_native_id"
signature: "get_native_id()"
directive: "function"
module: "_thread"
source_url: "https://docs.python.org/3/library/_thread.html#_thread.get_native_id"
license: "PSF"
updated: "2026-10-01"
---

# get_native_id

Return the native integral Thread ID of the current thread assigned by the kernel.
This is a non-negative integer.
Its value may be used to uniquely identify this particular thread system-wide
(until the thread terminates, after which the value may be recycled by the OS).

availability:: Windows, FreeBSD, Linux, macOS, OpenBSD, NetBSD, AIX, DragonFlyBSD, GNU/kFreeBSD, Solaris.

> *Added in 3.8*

> *Changed in 3.13*: Added support for GNU/kFreeBSD.

> *Changed in 3.15*: Added support for Solaris.
