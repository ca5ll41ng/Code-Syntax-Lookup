---
id: "python-zh-function-mimetypes-guess_all_extensions"
language: "python"
lang: "zh"
category: "function"
name: "guess_all_extensions"
signature: "guess_all_extensions(type, strict=True)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/zh-cn/3/library/mimetypes.html#mimetypes.guess_all_extensions"
license: "PSF"
updated: "2026-10-01"
---

# guess_all_extensions

Guess the extensions for a file based on its MIME type, given by *type*. The
return value is a list of strings giving all possible filename extensions,
including the leading dot (`'.'`).  The extensions are not guaranteed to have
been associated with any particular data stream, but would be mapped to the MIME
type *type* by `guess_type` and `guess_file_type`.

可选的 *strict* 参数具有与 :func:`guess_type` 函数一致的含义。
