---
id: "python-zh-function-os-chroot"
language: "python"
lang: "zh"
category: "function"
name: "chroot"
signature: "chroot(path)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.chroot"
license: "PSF"
updated: "2026-10-01"
---

# chroot

将当前进程的根目录更改为 *path*。

availability:: Unix, not WASI.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.16*: Support for Android now exists.
