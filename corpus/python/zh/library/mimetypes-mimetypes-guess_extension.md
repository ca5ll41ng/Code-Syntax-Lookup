---
id: "python-zh-function-mimetypes-guess_extension"
language: "python"
lang: "zh"
category: "function"
name: "guess_extension"
signature: "guess_extension(type, strict=True)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/zh-cn/3/library/mimetypes.html#mimetypes.guess_extension"
license: "PSF"
updated: "2026-10-01"
---

# guess_extension

Guess the extension for a file based on its MIME type, given by *type*. The
return value is a string giving a filename extension, including the leading dot
(`'.'`).  The extension is not guaranteed to have been associated with any
particular data stream, but would be mapped to the MIME type *type* by
`guess_type` and `guess_file_type`.
If no extension can be guessed for *type*, `None` is returned.

可选的 *strict* 参数具有与 :func:`guess_type` 函数一致的含义。
