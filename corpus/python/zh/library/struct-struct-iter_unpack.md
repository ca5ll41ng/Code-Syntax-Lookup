---
id: "python-zh-function-struct-iter_unpack"
language: "python"
lang: "zh"
category: "function"
name: "iter_unpack"
signature: "iter_unpack(format, buffer)"
directive: "function"
module: "struct"
source_url: "https://docs.python.org/zh-cn/3/library/struct.html#struct.iter_unpack"
license: "PSF"
updated: "2026-10-01"
---

# iter_unpack

Iteratively unpack from the buffer *buffer* according to the format
string *format*.  This function returns an iterator which will read
equally sized chunks from the buffer until all its contents have been
consumed.  The buffer's size in bytes must be a multiple of the size
required by the format, as reflected by `calcsize`.

每次迭代将产生一个如格式字符串所指定的元组。

> *Added in 3.4*
