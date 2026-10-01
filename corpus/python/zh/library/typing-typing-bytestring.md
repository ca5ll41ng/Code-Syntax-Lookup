---
id: "python-zh-function-typing-bytestring"
language: "python"
lang: "zh"
category: "function"
name: "ByteString"
signature: "ByteString(Sequence[int])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.ByteString"
license: "PSF"
updated: "2026-10-01"
---

# ByteString

:class:`collections.abc.ByteString` 的已弃用的别名。

Use `isinstance(obj, collections.abc.Buffer)` to test if `obj`
implements the `buffer protocol` at runtime. For use in
type annotations, either use `~collections.abc.Buffer` or a union
that explicitly specifies the types your code supports (e.g.,
`bytes  bytearray  memoryview`).

`ByteString` was originally intended to be an abstract class that
would serve as a supertype of both `bytes` and `bytearray`.
However, since the ABC never had any methods, knowing that an object was an
instance of `ByteString` never actually told you anything useful
about the object. Other common buffer types such as `memoryview` were
also never understood as subtypes of `ByteString` (either at runtime
or by static type checkers).

请参阅 :pep:`PEP 688 <688#current-options>` 了解详情。

deprecated-removed:: 3.9 3.17
