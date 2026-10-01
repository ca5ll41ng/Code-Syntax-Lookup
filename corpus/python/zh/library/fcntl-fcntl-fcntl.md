---
id: "python-zh-function-fcntl-fcntl"
language: "python"
lang: "zh"
category: "function"
name: "fcntl"
title: "Examples (all on a SVR4 compliant system)::"
directive: "module"
module: "fcntl"
source_url: "https://docs.python.org/zh-cn/3/library/fcntl.html#module-fcntl"
license: "PSF"
updated: "2026-10-01"
---

# Examples (all on a SVR4 compliant system)::

示例（都是运行于符合 SVR4 的系统）::

   import struct, fcntl, os

   f = open(...)
   rv = fcntl.fcntl(f, fcntl.F_SETFL, os.O_NDELAY)

   lockdata = struct.pack('hhllhh', fcntl.F_WRLCK, 0, 0, 0, 0, 0)
   rv = fcntl.fcntl(f, fcntl.F_SETLKW, lockdata)

Note that in the first example the return value variable *rv* will hold an
integer value; in the second example it will hold a `bytes` object.  The
structure lay-out for the *lockdata* variable is system dependent --- therefore
using the `flock` call may be better.

> **Seealso**
>
> Module `os`
>    If the locking flags `~os.O_SHLOCK` and `~os.O_EXLOCK` are
>    present in the `os` module (on BSD only), the `os.open`
>    function provides an alternative to the `lockf` and `flock`
>    functions.
>
