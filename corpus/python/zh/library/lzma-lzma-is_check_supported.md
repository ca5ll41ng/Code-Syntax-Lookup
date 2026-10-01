---
id: "python-zh-function-lzma-is_check_supported"
language: "python"
lang: "zh"
category: "function"
name: "is_check_supported"
signature: "is_check_supported(check)"
directive: "function"
module: "lzma"
source_url: "https://docs.python.org/zh-cn/3/library/lzma.html#lzma.is_check_supported"
license: "PSF"
updated: "2026-10-01"
---

# is_check_supported

如果本系统支持给定的一致性检查则返回 ``True``。

`CHECK_NONE` and `CHECK_CRC32` are always supported.
`CHECK_CRC64` and `CHECK_SHA256` may be unavailable if you are
using a version of `liblzma` that was compiled with a limited
feature set.
