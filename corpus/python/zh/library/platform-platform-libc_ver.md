---
id: "python-zh-function-platform-libc_ver"
language: "python"
lang: "zh"
category: "function"
name: "libc_ver"
signature: "libc_ver(executable=sys.executable, lib='', version='', chunksize=16384)"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/zh-cn/3/library/platform.html#platform.libc_ver"
license: "PSF"
updated: "2026-10-01"
---

# libc_ver

Tries to determine the libc version against which the file executable (defaults
to the Python interpreter) is linked.  Returns a tuple of strings `(lib,
version)` which default to the given parameters in case the lookup fails.

Note that this function has intimate knowledge of how different libc versions
add symbols to the executable is probably only usable for executables compiled
using `gcc`.

文件将按 *chunksize* 个字节的分块来读取和扫描。
