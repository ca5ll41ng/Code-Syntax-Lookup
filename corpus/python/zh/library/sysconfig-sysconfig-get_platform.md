---
id: "python-zh-function-sysconfig-get_platform"
language: "python"
lang: "zh"
category: "function"
name: "get_platform"
signature: "get_platform()"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/zh-cn/3/library/sysconfig.html#sysconfig.get_platform"
license: "PSF"
updated: "2026-10-01"
---

# get_platform

返回一个标识当前平台的字符串。

This is used mainly to distinguish platform-specific build directories and
platform-specific built distributions.  Typically includes the OS name and
version and the architecture (as supplied by `os.uname`), although the
exact information included depends on the OS; e.g., on Linux, the kernel
version isn't particularly important.

返回值的示例：

- linux-x86_64
- linux-aarch64
- solaris-2.6-sun4u

Windows:

- win-amd64 (64-bit Windows on AMD64, aka x86_64, Intel64, and EM64T)
- win-arm64 (64-bit Windows on ARM64, aka AArch64)
- win32 (all others - specifically, sys.platform is returned)

基于 POSIX 的操作系统：

- linux-x86_64
- macosx-15.5-arm64
- macosx-26.0-universal2 (macOS on Apple Silicon or Intel)
- android-24-arm64_v8a

对于其他非-POSIX 平台，目前只是返回 :data:`sys.platform`。
