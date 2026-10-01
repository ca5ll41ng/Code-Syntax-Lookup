---
id: "python-zh-function-os-posix_openpt"
language: "python"
lang: "zh"
category: "function"
name: "posix_openpt"
signature: "posix_openpt(oflag, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.posix_openpt"
license: "PSF"
updated: "2026-10-01"
---

# posix_openpt

打开并返回一个代表主要伪终端设备的文件描述符。

Calls the C standard library function :c`posix_openpt`. The *oflag*
argument is used to set file status flags and file access modes as
specified in the manual page of :c`posix_openpt` of your system.

The returned file descriptor is `non-inheritable`.
If the value `O_CLOEXEC` is available on the system, it is added to
*oflag*.

availability:: Unix, not WASI.

> *Added in 3.13*
